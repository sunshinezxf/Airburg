package controller;

import com.alibaba.fastjson.JSON;
import form.customer.ActivateForm;
import form.customer.CreateForm;
import model.customer.Customer;
import model.points.CustomerPoint;
import model.utils.ResponseCode;
import model.utils.ResultData;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import service.CustomerService;
import service.PointService;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by sunshine on 2016/11/25.
 */
@RestController
@RequestMapping("/customer")
public class CustomerController {
    private Logger logger = LoggerFactory.getLogger(CustomerController.class);

    @Autowired
    private CustomerService customerService;

    @Autowired
    private PointService pointService;

    @RequestMapping(method = RequestMethod.POST, value = "/create")
    public ResultData create(@Valid CreateForm form, BindingResult br) {
        ResultData result = new ResultData();
        if (br.hasErrors()) {
            result.setResponseCode(ResponseCode.RESPONSE_ERROR);
            result.setDescription(JSON.toJSONString(br.getFieldErrors()));
        }
        Customer customer = new Customer(form.getCustomerName(), form.getCustomerPhone(), form.getCustomerAddress());
        if (!StringUtils.isEmpty(form.getUpperCustomerId())) {
            Map<String, Object> condition = new HashMap<>();
            condition.put("customerId", form.getUpperCustomerId());
            ResultData response = customerService.fetchCustomer(condition);
            if (response.getResponseCode() == ResponseCode.RESPONSE_OK) {
                Customer upper = ((List<Customer>) response.getData()).get(0);
                customer.setUpper(upper);
            }
        }
        ResultData response = customerService.createCustomer(customer);
        if (response.getResponseCode() == ResponseCode.RESPONSE_OK) {
            result.setData(response.getData());
        } else if (response.getResponseCode() == ResponseCode.RESPONSE_ERROR) {
            result.setDescription(response.getDescription());
        } else {
            result.setResponseCode(ResponseCode.RESPONSE_NULL);
        }
        return result;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/overview")
    public ResultData overview() {
        ResultData result = new ResultData();
        Map<String, Object> condition = new HashMap<>();
        ResultData response = customerService.fetchCustomer(condition);
        if (response.getResponseCode() == ResponseCode.RESPONSE_OK) {
            result.setData(response.getData());
        } else if (response.getResponseCode() == ResponseCode.RESPONSE_ERROR) {
            result.setDescription(response.getDescription());
        } else {
            result.setResponseCode(ResponseCode.RESPONSE_NULL);
        }
        return result;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/activate")
    public ResultData activate(@Valid ActivateForm form, BindingResult br) {
        ResultData result = new ResultData();
        if (br.hasErrors()) {
            result.setResponseCode(ResponseCode.RESPONSE_ERROR);
            result.setDescription(JSON.toJSONString(br.getAllErrors()));
            return result;
        }
        Map<String, Object> condition = new HashMap<>();
        condition.put("customerPhone", form.getPhone());
        ResultData response = customerService.fetchCustomer(condition);
        if (response.getResponseCode() != ResponseCode.RESPONSE_OK) {
            result.setResponseCode(ResponseCode.RESPONSE_NULL);
        }
        Customer customer = ((List<Customer>) response.getData()).get(0);
        CustomerPoint point = new CustomerPoint(customer);
        response = pointService.createPoint(point);
        if (response.getResponseCode() == ResponseCode.RESPONSE_OK) {
            result.setData(response.getData());
        } else if (response.getResponseCode() == ResponseCode.RESPONSE_ERROR) {
            result.setDescription(response.getDescription());
        } else {
            result.setResponseCode(ResponseCode.RESPONSE_NULL);
        }
        return result;
    }
}
