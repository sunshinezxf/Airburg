package service;

import model.points.CustomerPoint;
import model.points.PointRecord;
import model.utils.ResultData;

import java.util.Map;

/**
 * Created by sunshine on 2016/11/25.
 */
public interface PointService {
    ResultData fetchPoint(Map<String, Object> condition);

    ResultData createPoint(CustomerPoint point);

    ResultData inPoint(CustomerPoint point, PointRecord record);

    ResultData outPoint(CustomerPoint point, PointRecord record);
}
