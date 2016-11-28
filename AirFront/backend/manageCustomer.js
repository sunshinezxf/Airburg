import React from 'react';
import {Link} from 'react-router';
import {Row,Button } from 'antd';
import {createForm} from 'rc-form';
import {CustomerTable} from './tables'



export const Home=React.createClass({
    render(){
        return (
            <div>
                homepage
            </div>
        )
    }
})

export const CustomerManage=React.createClass({
    render(){
        return (
            <div>
                <Row>
                    <h2>客户列表</h2>
                    <Button type="primary"><Link to="/customerForm/0">添加客户</Link></Button>
                </Row>
                <Row>
                    <CustomerTable {...this.props}/>
                </Row>
            </div>
        );
    }
});



