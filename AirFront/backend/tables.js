import React from 'react';
import {Link,hashHistory} from 'react-router';
import {Row,Col, Menu, Icon, Switch,Table,Button } from 'antd';
import {createForm} from 'rc-form';
import reqwest from 'reqwest';

import {ctx} from './commons'

export const CustomerTable=React.createClass({
    fetchAll() {
        this.setState({ loading: true });
        reqwest({
            url: ctx+'/customer/overview',
            method: 'get',
            type: 'json',
        }).then((data) => {
            this.setState({
                loading: false,
            });
            this.props.listCustomers(data.data);
        });
    },
    getInitialState() {
        return {
            //pagination: {},
            loading: false,
        };
    },
    handleEdit(id){
        window.location.hash=`/customerForm/${id}`;
    },
    handleDelete(id){
        reqwest({
            url: ctx+'/customer/delete',
            method: 'post',
            data:{customerId:id}
        }).then((data) => {
            this.props.deleteCustomer(id);
        });
    },
    componentDidMount(){
        if(this.props.customers.length==0)
            this.fetchAll();
    },
    render(){
        const columns = [
            { title: '姓名', width: 100, dataIndex: 'customerName', key: 'name', fixed: 'left' },
            { title: '手机号', width: 100, dataIndex: 'customerPhone', key: 'phone' },
            { title: '微信号', dataIndex: 'customerWechat', key: 'wechat', width: 100 },
            { title: 'upper', dataIndex: 'upper.customerName', key: 'upper', width: 100 },
            { title: '地址', dataIndex: 'customerAddress', key: 'address', width: 100 },
            { title: '创建时间', dataIndex: 'createAt', key: 'createAt', width: 100,
                render:createAt=>{return new Date(createAt).toLocaleDateString()} },
            {
                title: '操作',
                key: 'operation',
                width: 150,
                dataIndex:'customerId',
                render: id =>(<div>
                    <Button disabled onClick={()=>this.handleEdit(id)}>编辑</Button>
                    <Button disabled onClick={()=>this.handleDelete(id)}>删除</Button></div>),
            },
        ];

        return <Table columns={columns}
                      dataSource={this.props.customers}
            //pagination={this.state.pagination}
                      loading={this.state.loading}
                      scroll={{ x: 600, y: 400 }} />
    }
});



export const CustomerPointTable=React.createClass({
    fetchAll() {
        this.setState({ loading: true });
        reqwest({
            url: ctx+'/point/customer/overview',
            method: 'get',
            type: 'json',
        }).then((data) => {
            this.setState({
                loading: false,
            });
            this.props.listCustomerPoints(data.data);
        });
    },
    getInitialState() {
        return {
            //pagination: {},
            loading: false,
        };
    },
    componentDidMount() {
        //this.fetchAll();
    },
    render(){
        const columns = [
            { title: '姓名', width: 100, dataIndex: 'customer.customerName', key: 'name', fixed: 'left' },
            { title: '手机号', width: 100, dataIndex: 'customer.customerPhone', key: 'phone' },
            { title: '积分', dataIndex: 'pointValue', key: 'pointValue', width: 100 },
            {
                title: '操作',
                key: 'operation',
                width: 150,
                dataIndex:'customerId',
                render: id =>(<div>
                    <Button><Link to={`/customerPointForm/${id}`}>assign point</Link></Button></div>),
            },
        ];

        return <Table columns={columns}
                      dataSource={this.props.customerPoints}
            //pagination={this.state.pagination}
                      loading={this.state.loading}
                      scroll={{ x: 600, y: 400 }} />
    }
})


