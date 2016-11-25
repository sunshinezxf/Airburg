package dao;

import model.customer.Customer;
import model.utils.ResultData;

import java.util.Map;

/**
 * Created by sunshine on 2016/11/22.
 */
public interface CustomerDao {
    ResultData insert(Customer customer);

    ResultData query(Map<String, Object> condition);
}
