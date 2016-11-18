package model.customer;

import model.Entity;

/**
 * Created by sunshine on 2016/11/18.
 */
public class Customer extends Entity {
    private String customerId;

    private String customerWechat;

    private String customerName;

    private String customerPhone;

    private String customerAddress;

    public String getCustomerId() {
        return customerId;
    }

    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }

    public String getCustomerWechat() {
        return customerWechat;
    }

    public void setCustomerWechat(String customerWechat) {
        this.customerWechat = customerWechat;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerPhone() {
        return customerPhone;
    }

    public void setCustomerPhone(String customerPhone) {
        this.customerPhone = customerPhone;
    }

    public String getCustomerAddress() {
        return customerAddress;
    }

    public void setCustomerAddress(String customerAddress) {
        this.customerAddress = customerAddress;
    }
}
