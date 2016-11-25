package controller;

import model.utils.ResultData;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import service.PointService;

/**
 * Created by sunshine on 2016/11/25.
 */
@RestController
@RequestMapping("/point")
public class PointController {
    @Autowired
    private PointService pointService;

    private Logger logger = LoggerFactory.getLogger(PointController.class);

    @RequestMapping(method = RequestMethod.POST, value = "/customer/assign")
    public ResultData assign() {
        ResultData result = new ResultData();

        return result;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/customer/consume")
    public ResultData consume() {
        ResultData result = new ResultData();

        return result;
    }
}
