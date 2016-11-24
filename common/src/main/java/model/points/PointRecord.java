package model.points;

import model.customer.Customer;

/**
 * Created by sunshine on 2016/11/22.
 */
public class PointRecord {
    private String recordId;

    private PointLabel label;

    private Customer customer;

    private int recordValue;

    private String recordDescription;

    private RecordType recordType;

    public String getRecordId() {
        return recordId;
    }

    public void setRecordId(String recordId) {
        this.recordId = recordId;
    }

    public PointLabel getLabel() {
        return label;
    }

    public void setLabel(PointLabel label) {
        this.label = label;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public int getRecordValue() {
        return recordValue;
    }

    public void setRecordValue(int recordValue) {
        this.recordValue = recordValue;
    }

    public String getRecordDescription() {
        return recordDescription;
    }

    public void setRecordDescription(String recordDescription) {
        this.recordDescription = recordDescription;
    }

    public RecordType getRecordType() {
        return recordType;
    }

    public void setRecordType(RecordType recordType) {
        this.recordType = recordType;
    }
}
