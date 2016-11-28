import React from 'react';
import {hashHistory} from 'react-router';
import {Form, Input,  Select, Row, Col, Checkbox, Button,Switch,Spin,message} from 'antd';
import reqwest from 'reqwest';

const FormItem = Form.Item;
const Option = Select.Option;

import {ctx} from './commons'

export const CustomerPointForm = Form.create()(React.createClass({
    getInitialState() {
        let customerId=this.props.params.id;
        return {id:customerId, loading:false};
    },
    save(assign){
        this.setState({ loading: true });
        reqwest({
            url: ctx + '/point/customer/assign',
            method: 'post',
            data: assign
        }).then((data) => {
            this.props.assignCustomerPoint(data.data);
            this.setState({ loading: false });
            message.success('saving success');
        });
    },
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                if(values.customerId.length==0){
                    values.customerId='';
                }else{
                    if(values.customerId.length>0)
                        values.customerId=values.customerId[0];
                }
                this.save(values);
            }
        });
    },
    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {span: 4},
            wrapperCol: {span: 16},
        };
        const tailFormItemLayout = {
            wrapperCol: {
                span: 14,
                offset: 4,
            },
        };
        const children = [];
        var time=new Date().getTime();
        for (let i = 0; i < this.props.customers.length; i++) {
            let customer=this.props.customers[i];
            if(customer.customerId!=this.state.id) {
                children.push(<Option key={time++} value={customer.customerId}>{customer.customerName}</Option>);
            }
        }

        function handleChange(value) {
            console.log(`selected ${value}`);
        }
        return (
            <div>
                <Spin spinning={this.state.loading} tip="saving...">
            <Form horizontal onSubmit={this.handleSubmit} style={{marginTop:'50px'}}>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>姓名</span>
                    )}
                >
                    {getFieldDecorator('customerId', {
                        initialValue:[],
                        rules: [{required: true}],
                    })(
                        <Select
                            multiple
                            style={{ width: '100%' }}
                            onChange={handleChange}
                        >
                            {children}
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="积分数"
                >
                    {getFieldDecorator('point', {
                        initialValue:'',
                        rules: [{required: true, message: ''}],
                    })(
                        <Input type="number"/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="操作"
                >
                    {getFieldDecorator('gain', { initialValue:true,valuePropName: 'checked' })(
                        <Switch checkedChildren={'加积分'} unCheckedChildren={'减积分'}/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="描述"
                >
                    {getFieldDecorator('description', {
                        initialValue:'',
                        rules: [{required: false}],
                    })(
                        <Input type="text"/>
                    )}
                </FormItem>

                <FormItem {...tailFormItemLayout}>
                    <Row>
                        <Col  span={6}>
                            <Button type="primary" htmlType="submit" size="large">保存</Button>
                        </Col>
                        <Col  span={6}>
                            <Button type="primary" onClick={()=>window.history.go(-1)} size="large">返回</Button>
                        </Col>
                    </Row>
                </FormItem>
            </Form>
                    </Spin>
                </div>
        );
    },
}));
