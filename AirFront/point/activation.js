import React from 'react';
import {
    Button,
    List,
    WhiteSpace,
    WingBlank,
    InputItem,
    Toast,
} from 'antd-mobile';
import {createForm} from 'rc-form';

var seconds=60;
const SendButton = React.createClass({
    getInitialState(){
        return {
            disabled: false,
            text: '获取验证码'
        }
    },
    componentDidUpdate(){
        if (this.state.disabled) {
            if (this.state.text == '获取验证码') {
                this.timer = setInterval(()=> {
                    seconds--;
                    this.setState({text: `重新发送(${seconds})`});
                }, 1000);
            } else if (seconds == 0) {
                seconds=60;
                clearInterval(this.timer);
                this.setState({
                    disabled: false,
                    text: '获取验证码'
                });
            }
        }
    },

    render(){
        return <Button disabled={this.state.disabled} size="small"
                       onClick={()=> {
                           var able=this.props.sendMsg();
                           this.setState({disabled: able})
                       }}>{this.state.text}
        </Button>
    }
})

var Activation = React.createClass({
    submit(){
        var form = this.props.form;
        form.validateFields((error, value) => {
            console.log(error, value);
            form.submit(()=> {
                alert('submit form call back')
            })
        });
    },
    sendMsg(){
        var phone = this.props.form.getFieldProps('phone').value;
        if (phone){
            phone = phone.replace(/\s/g, "");
            if(phone.length==11&&phone.startsWith('1')){
                //send msg
                Toast.info('验证码已发送',2);
                return true;
            }else {
                Toast.info('请输入正确的手机号码',2);
                return false;
            }
        }else{
            Toast.info('请输入正确的手机号码',2);
            return true;
        }
        // this.props.form.submit(this.callback);
    },
    render(){
        const {getFieldProps, submit} = this.props.form;
        return (
            <div>
                <div className="bigTile">
                    账号激活
                    <p>欢迎加入</p>
                </div>
                <WhiteSpace size="lg"/>
                <List>
                    <InputItem
                        {...getFieldProps('phone')}
                        type="phone" clear
                        extra={ <SendButton sendMsg={this.sendMsg}/>}
                        placeholder="请输入手机号码"
                    >手机号码</InputItem>
                    <InputItem
                        {...getFieldProps('code')}
                        type="number" clear
                        maxLength={6}
                        placeholder="请输入验证码"
                    >验证码</InputItem>
                </List>
                <WhiteSpace size="lg"/>
                <WingBlank>
                    <Button type="primary" className='wred'
                            disabled={!(this.props.form.getFieldProps('phone').value &&
                            this.props.form.getFieldProps('code').value)}
                            onClick={this.submit}>确认激活
                    </Button>
                </WingBlank>

            </div>
        );
    }
});

Activation = createForm()(Activation);
export  default Activation;