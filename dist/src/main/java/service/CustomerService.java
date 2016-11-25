package service;

import model.customer.Customer;
import model.utils.ResultData;

import java.util.Map;

/**
 * Created by sunshine on 2016/11/25.
 */
public interface CustomerService {
    ResultData createCustomer(Customer customer);

    ResultData fetchCustomer(Map<String, Object> condition);
}
