package dao.impl;

import dao.BaseDao;
import dao.CustomerDao;
import model.customer.Customer;
import model.utils.ResponseCode;
import model.utils.ResultData;
import org.springframework.stereotype.Repository;

/**
 * Created by sunshine on 2016/11/24.
 */
@Repository
public class CustomerDaoImpl extends BaseDao implements CustomerDao {
    public ResultData insert(Customer customer) {
        ResultData result = new ResultData();
        try {
            sqlSession.insert("airburg.customer.insert", customer);
            result.setData(customer);
        } catch (Exception e) {
            result.setResponseCode(ResponseCode.RESPONSE_ERROR);
            result.setDescription(e.getMessage());
        }
        return result;
    }
}
