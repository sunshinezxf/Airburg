import React from 'react';
import {Link} from 'react-router';
import {Row,Col, Menu, Icon, Switch } from 'antd';
import {createForm} from 'rc-form';
import {MyTable} from './reactGrid'

const SubMenu = Menu.SubMenu;

export const Home=React.createClass({
    render(){
        return (
            <div>
                homepage
            </div>
        )
    }
})

export const CustomerTable=React.createClass({
    render(){
        return (
            <div>
                <Row>
                    <h2>客户列表</h2>
                </Row>
                <Row>
                    <MyTable/>
                </Row>
            </div>
        );
    }
});

export const PointTable=React.createClass({
    render(){
        return (
            <div>
                PointTable
            </div>
        );
    }
});


export  const Main = React.createClass({
    getInitialState(){
        return {}
    },
    handleClick(e) {
        this.setState({
            current: e.key,
        });
    },
    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <div className="bk-narbar">
                            <h1>后台管理</h1>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={6}>
                        <Menu theme='light'
                              onClick={this.handleClick}
                              defaultOpenKeys={['sub1']}
                              selectedKeys={[this.state.current]}
                              mode="inline"
                        >
                            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>后台管理</span></span>}>
                                <Menu.Item key="1"><Link to="/customer">客户信息</Link></Menu.Item>
                                <Menu.Item key="2"><Link to="/customerPoint">客户积分</Link></Menu.Item>
                                <Menu.Item key="3"><Link to="/pointRecord">积分记录</Link></Menu.Item>
                            </SubMenu>

                        </Menu>
                    </Col>
                    <Col className="gutter-row" span={18}>
                        {this.props.children}
                    </Col>
                </Row>

            </div>
        );
    },
});
