import React from 'react';
import {hashHistory} from 'react-router';
import {Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

export const CustomerForm = Form.create()(React.createClass({
    getInitialState() {
        return {};
    },
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                if(values.upperCustomerId.length==0){
                    values.upperCustomerId='';
                }else{
                    if(values.upperCustomerId.length>0)
                        values.upperCustomerId=values.upperCustomerId[0];
                }
                console.log('Received values of form: ', values);
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
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{width:'60px'}}>
                <Option value="86">+86</Option>
            </Select>
        );
        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push(<Option key={i} value={i.toString(36) + '_hehe'}>{i.toString(36) + 'hehe'}</Option>);
        }

        function handleChange(value) {
            console.log(`selected ${value}`);
        }
        return (
            <Form horizontal onSubmit={this.handleSubmit} style={{marginTop:'50px'}}>
                <FormItem
                    {...formItemLayout}
                    label="姓名"
                    hasFeedback
                >
                    {getFieldDecorator('customerName', {
                        rules: [{required: true, message: 'Please input name!'}],
                    })(
                        <Input type="text"/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="手机号"
                >
                    {getFieldDecorator('customerPhone', {
                        rules: [{required: true, message: 'Please input phone number!'}],
                    })(
                        <Input type="number"  addonBefore={prefixSelector}/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="地址"
                    hasFeedback
                >
                    {getFieldDecorator('customerAddress', {
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
                    hasFeedback
                >
                    {getFieldDecorator('upperCustomerId', {
                        initialValue:['10'],
                        rules: [{required: false}],
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
        );
    },
}));
