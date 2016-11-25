import React from 'react';
import {
    NavBar,
    Button,
    List,
    WhiteSpace,
    WingBlank,
    InputItem,
    Toast,
} from 'antd-mobile';

const Item = List.Item;
var profile = {id: '', name: '', phone: '', point: '123'};
export const PointCenter = React.createClass({
    getDefaultProps(){
        return {profile:profile}
    },
    render(){
        const {profile}=this.props;
        return (
            <div>
                <NavBar iconName="" mode="light">我的积分</NavBar>
                <WhiteSpace/>
                <Item>
                    <div className="bigTile" style={{height:'30vh'}}>
                        <p>当前积分</p>
                        {profile.point}
                    </div>
                </Item>
                <WhiteSpace size="lg"/>
                <Item>
                    <div  className="bigTile" style={{height:'40vh'}}>
                        积分商城建设中<br/><br/>
                        敬请期待
                    </div>
                </Item>
            </div>
        );
    }
});