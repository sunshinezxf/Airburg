package service.impl;

import com.alibaba.fastjson.JSONObject;
import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;
import com.sun.jersey.api.client.filter.HTTPBasicAuthFilter;
import com.sun.jersey.core.util.MultivaluedMapImpl;
import model.utils.ResponseCode;
import model.utils.ResultData;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import service.MessageService;
import utils.PlatformConfig;

import javax.ws.rs.core.MediaType;
import java.util.Set;

/**
 * Created by sunshine on 6/1/16.
 */
@Service
public class MessageServiceImpl implements MessageService {
    private Logger logger = LoggerFactory.getLogger(MessageServiceImpl.class);

    @Override
    public ResultData send(final String phone, final String message) {
        ResultData result = new ResultData();
        final String apiKey = PlatformConfig.instance().getValue("message_api_key");
        try {
            Thread thread = new Thread() {
                @Override
                public void run() {
                    Client client = Client.create();
                    client.addFilter(new HTTPBasicAuthFilter("api", apiKey));
                    WebResource webResource = client.resource(
                            "http://sms-api.luosimao.com/v1/send.json");
                    MultivaluedMapImpl formData = new MultivaluedMapImpl();
                    formData.add("mobile", phone);
                    formData.add("message", message);
                    ClientResponse response = webResource.type(MediaType.APPLICATION_FORM_URLENCODED).
                            post(ClientResponse.class, formData);
                    int status = response.getStatus();
                    if (status != HttpStatus.OK.value()) {
                        logger.error(JSONObject.toJSONString(response));
                    }
                }
            };
            thread.start();
        } catch (Exception e) {
            logger.error(e.getMessage());
            result.setResponseCode(ResponseCode.RESPONSE_ERROR);
        }
        return result;
    }

    @Override
    public ResultData send(final Set<String> phone, final String message) {
        ResultData result = new ResultData();
        try {
            Thread thread = new Thread() {
                @Override
                public void run() {
                    StringBuffer list = new StringBuffer();
                    for (String item : phone) {
                        list.append(item).append(",");
                    }
                    list.deleteCharAt(list.length() - 1);
                    Client client = Client.create();
                    client.addFilter(new HTTPBasicAuthFilter("api", PlatformConfig.getValue("message_api_key")));
                    WebResource webResource = client.resource(
                            "http://sms-api.luosimao.com/v1/send_batch.json");
                    MultivaluedMapImpl formData = new MultivaluedMapImpl();
                    formData.add("mobile_list", list.toString());
                    formData.add("message", message);
                    ClientResponse response = webResource.type(MediaType.APPLICATION_FORM_URLENCODED).
                            post(ClientResponse.class, formData);
                    int status = response.getStatus();
                    if (status != HttpStatus.OK.value()) {
                        logger.error(JSONObject.toJSONString(response));
                    }
                }
            };
            thread.start();
        } catch (Exception e) {
            logger.error(e.getMessage());
            result.setResponseCode(ResponseCode.RESPONSE_ERROR);
        }
        return result;
    }
}
