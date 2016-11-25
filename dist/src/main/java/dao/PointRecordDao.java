package dao;

import model.points.PointRecord;
import model.utils.ResultData;

import java.util.Map;

/**
 * Created by sunshine on 2016/11/25.
 */
public interface PointRecordDao {
    ResultData insert(PointRecord record);

    ResultData query(Map<String, Object> condition);
}
