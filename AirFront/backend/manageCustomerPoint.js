import React from 'react';
import {Link} from 'react-router';
import {Row,Button } from 'antd';
import {createForm} from 'rc-form';
import {CustomerPointTable} from './tables'



export const CustomerPointManage=React.createClass({
    render(){
        return (
            <div>
                <Row>
                    <h2>客户积分表</h2>
                    <Button type="primary"><Link to="/customerPointForm/0">assign point</Link></Button>
                </Row>
                <Row>
                    <CustomerPointTable {...this.props}/>
                </Row>
            </div>
        );
    }
});
