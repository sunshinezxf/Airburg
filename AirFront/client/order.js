import React from 'react';
import {
    NavBar,
    Icon,
    Button,
    Carousel,
    Flex,
    List,
    WhiteSpace,
    Card,
    Stepper,
    Tabs,
    WingBlank,
    TextareaItem,
    Checkbox
} from 'antd-mobile';
import LazyLoad from 'react-lazyload';
import {goods} from './goods'

const Item = List.Item;

const Order = React.createClass({
    getDefaultProps(){
        return {
            goods: goods
        }
    },
    getInitialState(){
        var goodsId = this.props.params.goodsId;
        var a = this.props.params.amount;
        var p = goods.primePrice;
        var t = a * p;
        return {
            amount: a,
            price: p,
            total: t,
        }
    },
    render(){
        const {buyCount, goods}=this.props;
        return (
            <div>
                <NavBar leftContent="" mode="light" onLeftClick={() => window.history.back()}>
                    确认购买
                </NavBar>
                <WhiteSpace size="lg"/>
                <Item arrow="horizontal" onClick={(e)=>window.location.hash = "/address"}>
                    请填写收货地址
                </Item>
                <WhiteSpace size="lg"/>
                <Item extra={<Checkbox defaultChecked={true} style={{marginLeft: 10, color: "red"}}/> }>
                    在线支付
                </Item>
                <WhiteSpace size="lg"/>

                <Item>
                    {goods.name}
                </Item>
                <List>
                    <div style={{
                        padding: '0',
                        backgroundColor: 'white',
                    }}>
                        <Flex>
                            <LazyLoad height={200} offset={100}>
                                <img style={{height: '30vw', marginRight: 8}} src={goods.img}/>
                            </LazyLoad>
                            <div style={{display: 'inline-block'}}>
                                <p>{goods.description}</p>
                                <span style={{marginRight: '15vw'}}>￥{this.state.price}</span>
                                <Stepper min={1} showNumber size="small" defaultValue={this.state.amount}
                                         onChange={(v)=>this.setState({amount: v, total: this.state.price * v})}
                                />
                            </div>
                        </Flex>
                    </div>
                </List>
                <Item>
                    <WingBlank>
                        <TextareaItem
                            autoHeight
                            placeholder="给卖家留言"
                        />
                    </WingBlank>
                </Item>
                <Item>
                    <div>
                        <span>商品金额</span>
                        <span style={{float: 'right'}}>￥{this.state.total}</span>
                    </div>
                    <div>
                        <span>运费</span>
                        <span style={{float: 'right'}}>￥0</span>
                    </div>
                </Item>

                <div style={{height: '120px'}}/>
                <div style={{zIndex: 100, bottom: 0, position: 'fixed', width: '100%', verticalAlign: 'center'}}>
                    <Item>
                        <div style={{float: 'right'}}>
                            <span style={{marginRight: '5vw'}}>应付总额:<b
                                style={{fontSize: '1.2em', color: 'red'}}>{`￥${this.state.total}`}</b></span>
                            <Button type="primary" onClick={()=>console.log('pay')}
                                    inline>去付款</Button>
                        </div>
                    </Item>
                </div>
            </div>
        )
    }
})

export default Order