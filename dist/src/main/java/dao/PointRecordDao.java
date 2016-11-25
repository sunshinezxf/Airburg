package dao;

import model.points.PointRecord;
import model.utils.ResultData;

/**
 * Created by sunshine on 2016/11/25.
 */
public interface PointRecordDao {
    ResultData insert(PointRecord record);
}
