import React from 'react';
import {NavBar, Icon, Button, Carousel, Flex, List, WhiteSpace, Card, Stepper,Tabs} from 'antd-mobile';
import LazyLoad from 'react-lazyload';
import QueueAnim from 'rc-queue-anim';

import Comments from './comments'
const Item = List.Item;
const TabPane=Tabs.TabPane;


var placeholderImg = 'https://s.geilicdn.com/shop/201611/images/common/placeholder.162a1388.png';

export var goods = {
    id: '1987926227',
    name: '空气堡新风机',
    img:'https://si.geilicdn.com/vshop1071620394-5412992997551478598385-815115.jpg',
    description: '空气堡新风机除甲醛PM2.5有氧通风 秒杀净化器 wd-764325',
    type: '',
    primePrice: 9698,
    sales: 9,
    collect: 2,
    payWay: ['微信支付', '支付宝支付', '信用卡支付'],
    favors: 5,
    imgUrls: [
        'https://si.geilicdn.com/vshop1071620394-5412992997551478598385-815115.jpg',
        'https://si.geilicdn.com/vshop1071620394-5412992997551478598386-274137.jpg',
        'https://si.geilicdn.com/vshop1071620394-5412992997551478598386-736011.jpg',
        'https://si.geilicdn.com/vshop1071620394-5412992997551478598387-316292.jpg',
        'https://si.geilicdn.com/vshop1071620394-5412992997551478598388-548478.jpg',
        'https://si.geilicdn.com/vshop1071620394-5412992997551478598389-210176.jpg',
        'https://si.geilicdn.com/vshop1071620394-5412992997551478598389-656199.jpg',
        'https://si.geilicdn.com/vshop1071620394-5412992997551478598389-923442.jpg',
        'https://si.geilicdn.com/vshop1071620394-5412992997551478598390-273548.jpg',
        'https://si.geilicdn.com/vshop1071620394-5412992997551478598390-547299.jpg',
        'https://si.geilicdn.com/vshop1071620394-5412992997551478598390-892232.jpg',
        'https://si.geilicdn.com/vshop1071620394-5412992997551478598391-97899.jpg',
        'https://si.geilicdn.com/vshop1071620394-5412992997551478598391-376607.jpg',
        'https://si.geilicdn.com/vshop1071620394-5412992997551478598391-952296.jpg',
        'https://si.geilicdn.com/vshop1071620394-5412992997551478598392-160759.jpg',
        'https://si.geilicdn.com/vshop1071620394-5412992997551478598392-398808.jpg',
        'https://si.geilicdn.com/vshop1071620394-5412992997551478598392-715191.jpg',
        'https://si.geilicdn.com/vshop1071620394-5412992997551478598393-439595.jpg',
        'https://si.geilicdn.com/vshop1071620394-5412992997551478598394-10749.jpg',
        'https://si.geilicdn.com/vshop1071620394-5412992997551478598394-513474.jpg',
    ]
}
var seller = {
    id: '1071620394',
    name: '空气堡新风店',
    phone: '400-998-4098',
    level: 2
}
function nameMask(name) {
    var l = name.length;
    if (name.length == 11) {
        return name.substring(0, 3) + '****' + name.substring(7);
    } else {
        return name.substring(0, l / 2) + '***';
    }
}
const comments = {
    nums: 3,
    contentList: [
        {
            user: nameMask('18611113987'),
            img:'https://sa.geilicdn.com/u_b6a75e6b0cdda389ceeb5ceac72aec75.jpg',
            start: 5,
            date: '2016-11-14',
            tag: ['质量好', '值得买', '发货快'],
            content: '很好的产品，空气净化质量很好',
            imgUrls: ['https://si.geilicdn.com/vshop1083135674-1479107810812-3935392.jpg',
                'https://si.geilicdn.com/vshop1083135674-1479107810812-3935392.jpg']
        },
        {
            user: nameMask('13933339004'),
            img:'https://sa.geilicdn.com/u_dd791d5022e8ceb4027829f895d1ece7.jpg',
            start: 5,
            date: '2016-11-10',
            tag: ['质量好', '值得买', '发货快', '性价比高', '包装精美'],
            content: '很好的产品，空气净化质量很好',
            imgUrls: ['https://si.geilicdn.com/vshop1083135674-1479107810812-3935392.jpg',
                'https://si.geilicdn.com/vshop1083135674-1479107810812-3935392.jpg']
        },
        {
            user: nameMask('13933339004'),
            img:'https://sa.geilicdn.com/u_dd791d5022e8ceb4027829f895d1ece7.jpg',
            start: 5,
            date: '2016-11-10',
            tag: ['质量好', '值得买', '发货快', '性价比高', '包装精美'],
            content: '很好的产品，空气净化质量很好,很好的产品，空气净化质量很好,很好的产品，空气净化质量很好',
            imgUrls: ['https://si.geilicdn.com/vshop1083135674-1479107810812-3935392.jpg',
                'https://si.geilicdn.com/vshop1083135674-1479107810812-3935392.jpg']
        },

    ]
}

function callback(key) {
    console.log(key);
}

const Goods = React.createClass({
    getDefaultProps(){
        return {
            goods: goods,
            seller: seller,
            comments: comments,
        }
    },
    getInitialState(){
        return {
            amount:1
        }
    },
    render(){
        var {goods, comments, seller}=this.props;
        var payWay = <div>
            {goods.payWay.map((pay, i)=> {
                return <span key={i}>{pay} </span>
            })}
            <Icon type="right" style={{float: 'right'}}/>
        </div>

        return (
            <div>
                <div>
                    <NavBar leftContent="返回" mode="light" onLeftClick={() => window.history.back()}></NavBar>
                    <Carousel>
                        {goods.imgUrls.slice(0, 3).map((img, i)=> {
                            return (
                                <Flex key={i}
                                      justify="center"
                                      style={{height: '50vmax'}}>
                                    <LazyLoad height='auto' placeholder={<img style={{height: 'auto',width:'100%'}} src={placeholderImg}/>}>
                                        <img src={img} width="100%" height="100%"></img>
                                    </LazyLoad>
                                </Flex>
                            );
                        })}
                    </Carousel>
                    <List>
                        <Item wrap extra=''>
                            <b style={{fontSize:'1.2em'}}>{goods.description}</b><br/>
                            <b style={{fontSize: '1.2em', color: 'red'}}>{`￥${goods.primePrice}`}</b><span> </span>
                            <span style={{background: 'rgba(220,220,220,0.5)'}}>销量:{goods.sales}</span>
                        </Item>
                    </List>

                    <WhiteSpace/>
                    <Tabs defaultActiveKey="1" onChange={callback} animated={false}>
                        <TabPane tab="商品详情" key="1">
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Card full>
                                    <Card.Header title={<span>{goods.description}</span>}/>
                                    <Card.Body>
                                        <div>
                                            {goods.imgUrls.map((img, i)=> {
                                                return <LazyLoad key={i} height={400} offset={10} placeholder={<img style={{height: 'auto',width:'100%'}} src={placeholderImg}/>}>
                                                    <img src={img} width="100%"></img>
                                                </LazyLoad>
                                            })}
                                        </div>
                                    </Card.Body>
                                    <Card.Footer content={<div style={{height:'120px'}}/>}>
                                    </Card.Footer>
                                </Card>
                            </div>
                        </TabPane>
                        <TabPane tab="用户评论" key="2">
                            <Card full>
                                <Card.Body>
                                    <Comments comments={comments.contentList}/>
                                </Card.Body>
                            </Card>
                            {/*<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>*/}
                            {/*</div>*/}
                        </TabPane>
                    </Tabs>

                </div>
                <div style={{zIndex: 100, bottom: 0, position: 'fixed', width: '100%'}}>
                    <Item>
                        数量:<Stepper min={1} showNumber size="small" defaultValue={this.state.amount} onChange={(v)=>{this.setState({amount:v})}}/>
                        <Button style={{float: 'right'}} type="primary" onClick={()=>window.location.hash='/order/'+goods.id+'/'+this.state.amount}
                                inline>立即购买</Button>
                    </Item>
                </div>

            </div>
        )
    }
})

export default Goods