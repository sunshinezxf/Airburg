package service.impl;

import dao.CustomerPointDao;
import dao.PointRecordDao;
import model.points.CustomerPoint;
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

        return result;
    }

    public ResultData createPoint(CustomerPoint point) {
        ResultData result = new ResultData();

        return result;
    }

    public ResultData inPoint(CustomerPoint point, int inValue) {
        ResultData result = new ResultData();

        return result;
    }

    public ResultData outPoint(CustomerPoint point, int outValue) {
        ResultData result = new ResultData();

        return result;
    }
}
