package schedule;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import utils.PlatformConfig;
import utils.WechatUtil;

/**
 * Created by sunshine on 16/9/23.
 */
public class WechatTokenSchedule {
    private Logger logger = LoggerFactory.getLogger(WechatTokenSchedule.class);

    public void schedule() {
        String token = WechatUtil.queryAccessToken();
        PlatformConfig.setAccessToken(token);
        logger.info("此次获取到的新的token的值为:" + token);
    }

}
