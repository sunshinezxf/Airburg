import React from 'react';
import {Link} from 'react-router';
import {Row,Col, Menu, Icon, Switch,Table,Button } from 'antd';
import {createForm} from 'rc-form';


const columns = [
    { title: '姓名', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
    { title: '手机号', width: 100, dataIndex: 'phone', key: 'phone' },
    { title: '微信号', dataIndex: 'wechat', key: 'wechat', width: 100 },
    { title: '上线', dataIndex: 'upper', key: 'upper', width: 100 },
    { title: '地址', dataIndex: 'address', key: 'address', width: 100 },
    { title: '创建时间', dataIndex: 'createTime', key: 'createTime', width: 100 },
    {
        title: '操作',
        key: 'operation',
        width: 150,
        dataIndex:'id',
            render: id =>(<div><Button onClick={()=>window.location.hash='/customerForm'}>编辑{id}</Button><Button>删除</Button></div>),
    },
];
const data = [];
for (let i = 0; i < 50; i++) {
    data.push({
        key: i,
        name: `Edrward ${i}`,
        phone: 11113333444,
        wechat:'123123',
        upper: `shangxian. ${i}`,
        createTime:'2014-12-12',
        address:'dffddfsfsdfdsf',
        id:i
    });
}

export const MyTable=React.createClass({
    render(){
        return <Table columns={columns} dataSource={data} scroll={{ x: 600, y: 400 }} />
    }
})


