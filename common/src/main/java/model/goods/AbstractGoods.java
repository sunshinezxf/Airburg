package model.goods;

import model.Entity;

import java.util.List;

/**
 * Created by sunshine on 2016/11/17.
 * 商品属性: 商品名, 商品类别, 商品标签, 商品原价
 * 辅助属性: 商品ID
 */
public abstract class AbstractGoods extends Entity {

    private String goodsId;

    private String goodsName;

    private GoodsType goodsType;

    private List<String> goodsLabel;

    private double goodsPrice;

    private GoodsDelivery goodsDelivery;

    public String getGoodsId() {
        return goodsId;
    }

    public void setGoodsId(String goodsId) {
        this.goodsId = goodsId;
    }

    public String getGoodsName() {
        return goodsName;
    }

    public void setGoodsName(String goodsName) {
        this.goodsName = goodsName;
    }

    public GoodsType getGoodsType() {
        return goodsType;
    }

    public void setGoodsType(GoodsType goodsType) {
        this.goodsType = goodsType;
    }

    public List<String> getGoodsLabel() {
        return goodsLabel;
    }

    public void setGoodsLabel(List<String> goodsLabel) {
        this.goodsLabel = goodsLabel;
    }

    public double getGoodsPrice() {
        return goodsPrice;
    }

    public void setGoodsPrice(double goodsPrice) {
        this.goodsPrice = goodsPrice;
    }

    public GoodsDelivery getGoodsDelivery() {
        return goodsDelivery;
    }

    public void setGoodsDelivery(GoodsDelivery goodsDelivery) {
        this.goodsDelivery = goodsDelivery;
    }
}
