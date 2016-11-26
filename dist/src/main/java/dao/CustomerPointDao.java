package dao;

import model.points.CustomerPoint;
import model.utils.ResultData;

import java.util.Map;

/**
 * Created by sunshine on 2016/11/24.
 */
public interface CustomerPointDao {
    ResultData insert(CustomerPoint point);

    ResultData query(Map<String, Object> condition);

    ResultData update(CustomerPoint point);
}
