package dao;

import model.points.CustomerPoint;
import model.utils.ResultData;

/**
 * Created by sunshine on 2016/11/24.
 */
public interface CustomerPointDao {
    ResultData insert(CustomerPoint point);
}
