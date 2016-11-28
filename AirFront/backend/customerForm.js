import React from 'react';
import {hashHistory} from 'react-router';
import {Form, Input, Select, Row, Col, Checkbox, Button, Spin,message} from 'antd';
import reqwest from 'reqwest';

import {Customer} from './commons'
import {ctx} from './commons'
const FormItem = Form.Item;
const Option = Select.Option;

export const CustomerForm = Form.create()(React.createClass({
    getInitialState() {
        let customerId = this.props.params.customerId;
        let customer = null;
        for (let i = 0; i < this.props.customers.length; i++) {
            if (this.props.customers[i].customerId == customerId) {
                customer = this.props.customers[i];
                break;
            }
        }
        if (customer == null) {
            customer = new Customer();
        }
        return {id: customerId, customer: customer,loading:false};
    },
    save(customer){
        this.setState({ loading: true });
        reqwest({
            url: ctx + '/customer/create',
            method: 'post',
            data: customer
        }).then((data) => {
            this.props.createCustomer(data.data);
            this.setState({ loading: false });
            message.success('saving success');
        });
    },
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                var l = values.upperCustomerId.length;
                if (l > 0)
                    values.upperCustomerId = values.upperCustomerId[0];
                else values.upperCustomerId = '';
                if (this.state.id != 0) {
                    values.customerId = this.state.id;
                    //this.update(values);
                } else {
                    values.customerId = '';
                    console.log(values);
                    this.save(values);
                }
            }
        });
    },
    checkPhone(rule, value, callback){
        if (value && /^1[3|4|5|7|8]\d{9}$/.test(value)) {
            callback();
        } else {
            callback('input correct phone number');
        }
    },
    render() {
        const {getFieldDecorator} = this.props.form;
        const customer = this.state.customer;
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
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{width: '60px'}}>
                <Option value="86">+86</Option>
            </Select>
        );
        const children = [];
        var time=new Date().getTime();
        for (var i = 0; i < this.props.customers.length; i++) {
            var c = this.props.customers[i];
            if (c.customerId != this.state.id) {
                children.push(<Option key={time++} value={c.customerId}>{c.customerName}</Option>);
            }
        }

        function handleChange(value) {
            console.log(`selected ${value}`);
        }

        return (
            <div>
                <Spin spinning={this.state.loading} tip="saving...">
                    <Form horizontal onSubmit={this.handleSubmit} style={{marginTop: '50px'}}>
                        <FormItem
                            {...formItemLayout}
                            label="姓名"
                        >
                            {getFieldDecorator('customerName', {
                                initialValue: customer.customerName,
                                rules: [{required: true, message: ''}],
                            })(
                                <Input type="text"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="手机号"
                        >
                            {getFieldDecorator('customerPhone', {
                                initialValue: customer.customerPhone.toString(),
                                rules: [{required: true, message: ''}, {
                                    validator: this.checkPhone,
                                }],
                            })(
                                <Input type="number" addonBefore={prefixSelector}/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="地址"
                        >
                            {getFieldDecorator('customerAddress', {
                                initialValue: customer.customerAddress,
                                rules: [{required: false}],
                            })(
                                <Input type="text"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label={(
                                <span>介绍人</span>
                            )}
                        >
                            {getFieldDecorator('upperCustomerId', {
                                initialValue: customer.upper != null && customer.upper.customerId ? [customer.upper.customerId] : [],
                                rules: [{required: false}],
                            })(
                                <Select
                                    multiple
                                    style={{width: '100%'}}
                                    onChange={handleChange}
                                >
                                    {children}
                                </Select>
                            )}
                        </FormItem>
                        <FormItem {...tailFormItemLayout}>
                            <Row>
                                <Col span={6}>
                                    <Button type="primary" htmlType="submit" size="large">保存</Button>
                                </Col>
                                <Col span={6}>
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
