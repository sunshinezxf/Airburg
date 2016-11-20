package model.payment;

import model.Entity;

/**
 * Created by sunshine on 2016/11/20.
 */
public class Payway extends Entity {
    private String wayId;

    private String wayName;

    private String wayDescription;

    public Payway() {
        super();
    }

    public Payway(String wayName, String wayDescription) {
        this();
        this.wayName = wayName;
        this.wayDescription = wayDescription;
    }

    public String getWayId() {
        return wayId;
    }

    public void setWayId(String wayId) {
        this.wayId = wayId;
    }

    public String getWayName() {
        return wayName;
    }

    public void setWayName(String wayName) {
        this.wayName = wayName;
    }

    public String getWayDescription() {
        return wayDescription;
    }

    public void setWayDescription(String wayDescription) {
        this.wayDescription = wayDescription;
    }
}
