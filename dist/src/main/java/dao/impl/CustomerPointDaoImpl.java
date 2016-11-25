package dao.impl;

import dao.BaseDao;
import dao.CustomerPointDao;
import model.points.CustomerPoint;
import model.utils.IDGenerator;
import model.utils.ResponseCode;
import model.utils.ResultData;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Map;

/**
 * Created by sunshine on 2016/11/25.
 */
public class CustomerPointDaoImpl extends BaseDao implements CustomerPointDao {
    private Logger logger = LoggerFactory.getLogger(CustomerPointDaoImpl.class);

    public ResultData insert(CustomerPoint point) {
        ResultData result = new ResultData();
        point.setPointId(IDGenerator.generate("CPT"));
        try {
            sqlSession.insert("airburg.customerpoint.insert", point);
            result.setData(point);
        } catch (Exception e) {
            logger.error(e.getMessage());
            result.setResponseCode(ResponseCode.RESPONSE_ERROR);
            result.setDescription(e.getMessage());
        }
        return result;
    }

    public ResultData query(Map<String, Object> condition) {
        ResultData result = new ResultData();
        try {
            List<CustomerPoint> list = sqlSession.selectList("airburg.customerpoint.query", condition);
            if (list.isEmpty()) {
                result.setResponseCode(ResponseCode.RESPONSE_NULL);
            }
            result.setData(list);
        } catch (Exception e) {
            logger.error(e.getMessage());
            result.setResponseCode(ResponseCode.RESPONSE_ERROR);
            result.setDescription(e.getMessage());
        }
        return result;
    }
}
