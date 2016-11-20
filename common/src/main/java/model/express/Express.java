package model.express;

import model.Entity;

/**
 * Created by sunshine on 2016/11/20.
 */
public class Express extends Entity {
    private String expressId;

    private String expressNo;

    private ExpressCompany expressCompany;

    private String senderName;

    private String senderPhone;

    private String senderAddress;

    private String receiverName;

    private String receiverPhone;

    private String receiverAddress;

    private String expressDescription;

    public Express() {
        super();
        this.expressDescription = "";
    }

    public Express(String expressNo, ExpressCompany expressCompany) {
        this();
        this.expressNo = expressNo;
        this.expressCompany = expressCompany;
    }

    public Express(String expressNo, ExpressCompany expressCompany, String senderName, String senderPhone, String senderAddress, String receiverName, String receiverPhone, String receiverAddress) {
        this(expressNo, expressCompany);
        this.senderName = senderName;
        this.senderPhone = senderPhone;
        this.senderAddress = senderAddress;
        this.receiverName = receiverName;
        this.receiverPhone = receiverPhone;
        this.receiverAddress = receiverAddress;
    }

    public Express(String expressNo, ExpressCompany expressCompany, String senderName, String senderPhone, String senderAddress, String receiverName, String receiverPhone, String receiverAddress, String expressDescription) {
        this(expressNo, expressCompany, senderName, senderPhone, senderAddress, receiverName, receiverPhone, receiverAddress);
        this.expressDescription = expressDescription;
    }

    public String getExpressId() {
        return expressId;
    }

    public void setExpressId(String expressId) {
        this.expressId = expressId;
    }

    public String getExpressNo() {
        return expressNo;
    }

    public void setExpressNo(String expressNo) {
        this.expressNo = expressNo;
    }

    public ExpressCompany getExpressCompany() {
        return expressCompany;
    }

    public void setExpressCompany(ExpressCompany expressCompany) {
        this.expressCompany = expressCompany;
    }

    public String getSenderName() {
        return senderName;
    }

    public void setSenderName(String senderName) {
        this.senderName = senderName;
    }

    public String getSenderPhone() {
        return senderPhone;
    }

    public void setSenderPhone(String senderPhone) {
        this.senderPhone = senderPhone;
    }

    public String getSenderAddress() {
        return senderAddress;
    }

    public void setSenderAddress(String senderAddress) {
        this.senderAddress = senderAddress;
    }

    public String getReceiverName() {
        return receiverName;
    }

    public void setReceiverName(String receiverName) {
        this.receiverName = receiverName;
    }

    public String getReceiverPhone() {
        return receiverPhone;
    }

    public void setReceiverPhone(String receiverPhone) {
        this.receiverPhone = receiverPhone;
    }

    public String getReceiverAddress() {
        return receiverAddress;
    }

    public void setReceiverAddress(String receiverAddress) {
        this.receiverAddress = receiverAddress;
    }

    public String getExpressDescription() {
        return expressDescription;
    }

    public void setExpressDescription(String expressDescription) {
        this.expressDescription = expressDescription;
    }
}
