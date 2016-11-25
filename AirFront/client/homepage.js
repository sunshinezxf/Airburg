import React from 'react';
import {SearchBar, NavBar, Icon, Button, Carousel, Flex, List, WhiteSpace, Card, Stepper} from 'antd-mobile';
import LazyLoad from 'react-lazyload';
import Demo from './demo'

var homePic = "https://si.geilicdn.com/vshop1071620394-5412992997551478598385-815115.jpg";
var list = [];

const Search = React.createClass({
    getInitialState(){
        return {
            value: ''
        }
    },
    onChange(value) {
        this.setState({value});
    },
    clear() {
        this.setState({value: ''});
    },
    submit(value){
        alert("search " + value);
    },
    render(){
        return (
            <SearchBar style={{backgroud: 'rgba(0,0,0,0)'}}
                       value={this.state.value}
                       placeholder="搜索商品"
                       onSubmit={this.submit}
                       onClear={this.clear}
                       showCancelButton={false}
                       onChange={this.onChange}
            />
        );
    }
});
var GoodsList = React.createClass({
    getDefaultProps(){
        return {
            list: list
        }
    },
    render(){
        return (
            <div></div>
        );
    }
});

const HomePage = React.createClass({
    getDefaultProps(){
        return {
            goodsList: [],
        }
    },

    render(){
        return (
            <div>
                <div style={{height:"50vmax"}}>
                    <LazyLoad height={100} offset={1000} once>
                        <img src={homePic} width="100%" height="100%"></img>
                    </LazyLoad>
                </div>

                <Search/>
                <Demo/>
            </div>
        )
    }
});

export default HomePage;