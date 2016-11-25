package dao.impl;

import dao.BaseDao;
import dao.PointRecordDao;
import model.points.PointRecord;
import model.utils.IDGenerator;
import model.utils.ResponseCode;
import model.utils.ResultData;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * Created by sunshine on 2016/11/25.
 */
@Repository
public class PointRecordDaoImpl extends BaseDao implements PointRecordDao {
    private Logger logger = LoggerFactory.getLogger(PointRecordDaoImpl.class);

    public ResultData insert(PointRecord record) {
        ResultData result = new ResultData();
        record.setRecordId(IDGenerator.generate("PRD"));
        try {
            sqlSession.insert("airburg.pointrecord.insert", record);
            result.setData(record);
        } catch (Exception e) {
            result.setResponseCode(ResponseCode.RESPONSE_ERROR);
            result.setDescription(e.getMessage());
            return result;
        }
        return result;
    }

    public ResultData query(Map<String, Object> condition) {
        ResultData result = new ResultData();
        try {
            List<PointRecord> list = sqlSession.selectList("airburg.pointrecord.query", condition);
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
