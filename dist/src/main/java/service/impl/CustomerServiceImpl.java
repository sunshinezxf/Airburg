package service.impl;

import dao.CustomerDao;
import model.customer.Customer;
import model.utils.ResultData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import service.CustomerService;

import java.util.Map;

/**
 * Created by sunshine on 2016/11/25.
 */
@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerDao customerDao;

    public ResultData createCustomer(Customer customer) {
        ResultData result = new ResultData();

        return result;
    }

    public ResultData fetchCustomer(Map<String, Object> condition) {
        ResultData result = new ResultData();

        return result;
    }
}
