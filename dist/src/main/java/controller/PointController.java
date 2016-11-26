package controller;

import com.alibaba.fastjson.JSON;
import form.point.PointRecordForm;
import model.points.CustomerPoint;
import model.points.PointRecord;
import model.points.RecordType;
import model.utils.ResponseCode;
import model.utils.ResultData;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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
@RequestMapping("/point")
public class PointController {
    private Logger logger = LoggerFactory.getLogger(PointController.class);

    @Autowired
    private PointService pointService;

    @Autowired
    private CustomerService customerService;

    @RequestMapping(method = RequestMethod.POST, value = "/customer/assign")
    public ResultData assign(@Valid PointRecordForm form, BindingResult br) {
        ResultData result = new ResultData();
        if (br.hasErrors()) {
            result.setResponseCode(ResponseCode.RESPONSE_ERROR);
            result.setDescription(JSON.toJSONString(br.getAllErrors()));
        }
        Map<String, Object> condition = new HashMap<>();
        condition.put("customerId", form.getCustomerId());

        ResultData response = pointService.fetchPoint(condition);
        if (response.getResponseCode() != ResponseCode.RESPONSE_OK) {
            result.setResponseCode(ResponseCode.RESPONSE_NULL);
            return result;
        }
        CustomerPoint point = ((List<CustomerPoint>) response.getData()).get(0);
        PointRecord record = new PointRecord(point.getCustomer(), form.getPoint(), form.getDescription(), (form.isGain()) ? RecordType.GAIN : RecordType.CONSUME);
        if (form.isGain()) {
            response = pointService.inPoint(point, record);
        } else {
            response = pointService.outPoint(point, record);
        }
        if (response.getResponseCode() == ResponseCode.RESPONSE_OK) {
            result.setData(response.getData());
        } else if (response.getResponseCode() == ResponseCode.RESPONSE_ERROR) {
            result.setResponseCode(ResponseCode.RESPONSE_ERROR);
            result.setDescription(response.getDescription());
        } else {
            result.setResponseCode(ResponseCode.RESPONSE_NULL);
        }
        return result;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/customer/consume")
    public ResultData consume() {
        ResultData result = new ResultData();

        return result;
    }
}
