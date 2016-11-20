package model.bill;

import model.order.AbstractOrder;
import model.payment.Payway;

/**
 * Created by sunshine on 2016/11/20.
 */
public class OrderBill {
    private AbstractOrder order;

    private Payway payway;

    private BillStatus status;

    public OrderBill() {
        super();
    }

    public OrderBill(AbstractOrder order, Payway payway, BillStatus status) {
        this();
        this.order = order;
        this.payway = payway;
        this.status = status;
    }

    public AbstractOrder getOrder() {
        return order;
    }

    public void setOrder(AbstractOrder order) {
        this.order = order;
    }

    public Payway getPayway() {
        return payway;
    }

    public void setPayway(Payway payway) {
        this.payway = payway;
    }

    public BillStatus getStatus() {
        return status;
    }

    public void setStatus(BillStatus status) {
        this.status = status;
    }
}
