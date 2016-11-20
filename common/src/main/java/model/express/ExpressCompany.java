package model.express;

import model.Entity;

/**
 * Created by sunshine on 2016/11/20.
 */
public class ExpressCompany extends Entity {
    private String companyId;

    private String companyName;

    public ExpressCompany() {
        super();
    }

    public ExpressCompany(String companyName) {
        this.companyName = companyName;
    }

    public String getCompanyId() {
        return companyId;
    }

    public void setCompanyId(String companyId) {
        this.companyId = companyId;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }
}
