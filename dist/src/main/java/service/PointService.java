package service;

import model.points.CustomerPoint;
import model.utils.ResultData;

import java.util.Map;

/**
 * Created by sunshine on 2016/11/25.
 */
public interface PointService {
    ResultData fetchPoint(Map<String, Object> condition);

    ResultData createPoint(CustomerPoint point);

    ResultData inPoint(CustomerPoint point, int inValue);

    ResultData outPoint(CustomerPoint point, int outValue);
}
