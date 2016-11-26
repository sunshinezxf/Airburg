package model.points;

import model.Entity;
import model.customer.Customer;

import java.sql.Timestamp;


/**
 * Created by sunshine on 2016/11/22.
 */
public class CustomerPoint extends Entity {
    private String pointId;

    private Customer customer;

    private int pointValue;

    private Timestamp updateAt;

    public CustomerPoint() {
        super();
        this.pointValue = 0;
        this.updateAt = new Timestamp(System.currentTimeMillis());
    }

    public CustomerPoint(Customer customer) {
        this();
        this.customer = customer;
    }

    public String getPointId() {
        return pointId;
    }

    public void setPointId(String pointId) {
        this.pointId = pointId;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public int getPointValue() {
        return pointValue;
    }

    public void setPointValue(int pointValue) {
        this.pointValue = pointValue;
    }

    public Timestamp getUpdateAt() {
        return updateAt;
    }

    public void setUpdateAt(Timestamp updateAt) {
        this.updateAt = updateAt;
    }
}
