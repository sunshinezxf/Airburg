package model.wechat;

import java.util.Date;

/**
 * Created by sunshine on 5/25/16.
 */
public class TextOutMessage {
    private String ToUserName;
    private String FromUserName;
    private long CreateTime;
    private String MsgType = "text";
    private String Content;

    public TextOutMessage() {
        super();
        this.CreateTime = new Date().getTime();
    }

    public TextOutMessage(String ToUserName, String FromUserName) {
        this();
        this.ToUserName = ToUserName;
        this.FromUserName = FromUserName;
    }

    public String getToUserName() {
        return ToUserName;
    }

    public void setToUserName(String toUserName) {
        ToUserName = toUserName;
    }

    public String getFromUserName() {
        return FromUserName;
    }

    public void setFromUserName(String fromUserName) {
        FromUserName = fromUserName;
    }

    public long getCreateTime() {
        return CreateTime;
    }

    public void setCreateTime(long createTime) {
        CreateTime = createTime;
    }

    public String getMsgType() {
        return MsgType;
    }

    public void setMsgType(String msgType) {
        MsgType = msgType;
    }

    public String getContent() {
        return Content;
    }

    public void setContent(String content) {
        Content = content;
    }
}
