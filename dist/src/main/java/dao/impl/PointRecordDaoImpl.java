package dao.impl;

import dao.BaseDao;
import dao.PointRecordDao;
import model.points.PointRecord;
import model.utils.ResponseCode;
import model.utils.ResultData;
import org.springframework.stereotype.Repository;

/**
 * Created by sunshine on 2016/11/25.
 */
@Repository
public class PointRecordDaoImpl extends BaseDao implements PointRecordDao {
    public ResultData insert(PointRecord record) {
        ResultData result = new ResultData();
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
}
