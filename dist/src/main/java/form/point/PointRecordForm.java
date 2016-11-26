package form.point;

/**
 * Created by sunshine on 2016/11/26.
 */
public class PointRecordForm {
    private String customerId;

    private int point;

    private String description;

    private boolean gain;

    public String getCustomerId() {
        return customerId;
    }

    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }

    public int getPoint() {
        return point;
    }

    public void setPoint(int point) {
        this.point = point;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isGain() {
        return gain;
    }

    public void setGain(boolean gain) {
        this.gain = gain;
    }
}
