import React from 'react';
import {Link} from 'react-router';
import {Row,Col, Menu, Icon,Button } from 'antd';
const SubMenu = Menu.SubMenu;

export const Main = React.createClass({
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
                                {/*<Menu.Item key="3"><Link to="/pointRecord">积分记录</Link></Menu.Item>*/}
                            </SubMenu>

                        </Menu>
                    </Col>
                    <Col className="gutter-row" span={18}>
                        {React.cloneElement(this.props.children,this.props)}
                    </Col>
                </Row>

            </div>
        );
    },
});

