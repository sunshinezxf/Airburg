import React from 'react';
import {
    NavBar,
    Icon,
    Button,
    Flex,
    List,
    WhiteSpace,
    Card,
    Stepper,
    WingBlank,
    TextareaItem,
    Checkbox,
    InputItem,
    Switch
} from 'antd-mobile';
import { createForm } from 'rc-form';

const Item=List.Item;

var Address=React.createClass({

    render(){
        const { getFieldProps } = this.props.form;
        return (
            <div>
                <NavBar leftContent="" mode="light" onLeftClick={() => window.history.back()}>
                    填写收货信息
                </NavBar>
                <List>
                <InputItem
                    {...getFieldProps('name')}
                    placeholder="收货人姓名"
                >收货人</InputItem>
                <InputItem
                    {...getFieldProps('phone')}
                    placeholder="收货人手机号"
                    type="phone"
                >手机号码</InputItem>
                <InputItem
                    {...getFieldProps('district')}
                    placeholder="请选择"
                >所在地区</InputItem>
                <TextareaItem
                    {...getFieldProps('control')}
                    title="详细地址"
                    autoHeight
                    placeholder="街道地址"
                />
                <List.Item
                    extra={<Switch
                        {...getFieldProps('saveDefault', {
                            initialValue: true,
                            valuePropName: 'checked',
                        })}
                    />}
                >设为默认地址</List.Item>
                    </List>
                <WhiteSpace size="lg"/>
                <WingBlank>
                    <Button type="primary" onClick={e => console.log(e)}>保存并使用</Button>
                </WingBlank>
            </div>
        )
    }
})

Address=createForm()(Address);

export default Address


