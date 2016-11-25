package dao.impl;

import dao.BaseDao;
import dao.CustomerDao;
import model.customer.Customer;
import model.utils.IDGenerator;
import model.utils.ResponseCode;
import model.utils.ResultData;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * Created by sunshine on 2016/11/24.
 */
@Repository
public class CustomerDaoImpl extends BaseDao implements CustomerDao {
    public ResultData insert(Customer customer) {
        ResultData result = new ResultData();
        customer.setCustomerId(IDGenerator.generate("CUS"));
        try {
            sqlSession.insert("airburg.customer.insert", customer);
            result.setData(customer);
        } catch (Exception e) {
            result.setResponseCode(ResponseCode.RESPONSE_ERROR);
            result.setDescription(e.getMessage());
        }
        return result;
    }

    public ResultData query(Map<String, Object> condition) {
        ResultData result = new ResultData();
        try {
            List<Customer> list = sqlSession.selectList("airburg.customer.query", condition);
            if (list.isEmpty()) {
                result.setResponseCode(ResponseCode.RESPONSE_NULL);
            }
            result.setData(list);
        } catch (Exception e) {
            result.setResponseCode(ResponseCode.RESPONSE_ERROR);
            result.setDescription(e.getMessage());
        }
        return result;
    }
}
