package service.impl;

import dao.CustomerPointDao;
import dao.PointRecordDao;
import model.points.CustomerPoint;
import model.points.PointRecord;
import model.utils.ResponseCode;
import model.utils.ResultData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import service.PointService;

import java.util.Map;

/**
 * Created by sunshine on 2016/11/25.
 */
@Service
public class PointServiceImpl implements PointService {

    @Autowired
    private CustomerPointDao customerPointDao;

    @Autowired
    private PointRecordDao pointRecordDao;

    public ResultData fetchPoint(Map<String, Object> condition) {
        ResultData result = new ResultData();
        ResultData response = customerPointDao.query(condition);
        if (response.getResponseCode() == ResponseCode.RESPONSE_OK) {
            result.setData(response.getData());
        } else if (response.getResponseCode() == ResponseCode.RESPONSE_ERROR) {
            result.setResponseCode(ResponseCode.RESPONSE_ERROR);
            result.setDescription(response.getDescription());
        } else {
            result.setResponseCode(ResponseCode.RESPONSE_NULL);
        }
        return result;
    }

    @Override
    public ResultData createPoint(CustomerPoint point) {
        ResultData result = new ResultData();
        ResultData response = customerPointDao.insert(point);
        if (response.getResponseCode() == ResponseCode.RESPONSE_OK) {
            result.setData(response.getData());
        } else {
            result.setDescription(response.getDescription());
        }
        return result;
    }

    @Override
    public ResultData inPoint(CustomerPoint point, PointRecord record) {
        ResultData result = new ResultData();
        ResultData response = pointRecordDao.insert(record);
        if (response.getResponseCode() == ResponseCode.RESPONSE_OK) {
            result.setData(response.getData());
        } else if (response.getResponseCode() == ResponseCode.RESPONSE_ERROR) {
            result.setResponseCode(ResponseCode.RESPONSE_ERROR);
            result.setDescription(response.getDescription());
        } else {
            result.setResponseCode(ResponseCode.RESPONSE_NULL);
        }
        point.setPointValue(point.getPointValue() + record.getRecordValue());
        return result;
    }

    public ResultData outPoint(CustomerPoint point, PointRecord record) {
        ResultData result = new ResultData();
        ResultData response = pointRecordDao.insert(record);
        if (response.getResponseCode() != ResponseCode.RESPONSE_OK) {
            result.setResponseCode(ResponseCode.RESPONSE_ERROR);
            result.setDescription(response.getDescription());
        }
        point.setPointValue(point.getPointValue() - record.getRecordValue());
        response = customerPointDao.update(point);
        if (response.getResponseCode() == ResponseCode.RESPONSE_OK) {
            result.setData(response.getData());
        } else if (response.getResponseCode() == ResponseCode.RESPONSE_ERROR) {
            result.setResponseCode(ResponseCode.RESPONSE_ERROR);
            result.setDescription(response.getDescription());
        }
        return result;
    }
}
