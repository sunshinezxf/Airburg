import React from 'react';
import {ListView,Icon,Flex}  from 'antd-mobile';
import LazyLoad from 'react-lazyload';

var placeholderImg = 'https://s.geilicdn.com/shop/201611/images/common/placeholder.162a1388.png';
const data = [
    {
        id: '1987926227',
        name: '空气堡新风机',
        des: '空气堡新风机除甲醛PM2.5有氧通风 秒杀净化器 wd-764325',
        price: 9698,
        img: 'https://si.geilicdn.com/vshop1071620394-5412992997551478598385-815115.jpg'
    },
    {
        id: '1987926228',
        name: '空气堡新风机',
        des: '空气堡新风机除甲醛PM2.5有氧通风 秒杀净化器 wd-764325',
        price: 9698,
        img: 'https://si.geilicdn.com/vshop1071620394-5412992997551478598385-815115.jpg'
    },
    {
        id: '1987926229',
        name: '空气堡新风机',
        des: '空气堡新风机除甲醛PM2.5有氧通风 秒杀净化器 wd-764325',
        price: 9698,
        img: 'https://si.geilicdn.com/vshop1071620394-5412992997551478598385-815115.jpg'
    },

]

let index = data.length - 1;

const NUM_ROWS = 20;
let pageIndex = 0;

const Demo = React.createClass({
    getInitialState() {
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.genData = (pIndex = 0) => {
            const dataBlob = {};
            for (let i = 0; i < NUM_ROWS; i++) {
                const ii = (pIndex * NUM_ROWS) + i;
                dataBlob[`${ii}`] = `row - ${ii}`;
            }
            return dataBlob;
        };
        this.rData = this.genData();
        return {
            dataSource: dataSource.cloneWithRows(this.rData),
            isLoading: false,
        };
    },

    onEndReached(event) {
        // load new data
        console.log('reach end', event);
        this.setState({isLoading: true});
        setTimeout(() => {
            this.rData = {...this.rData, ...this.genData(++pageIndex)};
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 1000);
    },
    onClick(e){
       window.location.hash='goods';
    },

    render() {
        const separator = (sectionID, rowID) => (
            <div key={`${sectionID}-${rowID}`} style={{
                backgroundColor: '#F5F5F9',
                height: 1,
                borderTop: '1px solid #ECECED',
                borderBottom: '1px solid #ECECED',
            }}
            />
        );
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = data.length - 1;
            }
            const obj = data[index--];
            return (
                <div key={rowID} onClick={this.onClick}
                     style={{width:'100%',
                         padding: '0',
                         backgroundColor: 'white',
                     }}
                >
                        <Flex>
                            <LazyLoad height={200} offset={100} placeholder={<img src={placeholderImg} height={200}/>}>
                                <img style={{height: '200px', marginRight: 8}} src={obj.img}/>
                            </LazyLoad>
                            <div style={{display: 'inline-block'}}>
                                <p>{obj.des}</p>
                                <p><span style={{fontSize: '1.6em', color: '#FF6E27'}}>￥{obj.price}</span></p>
                            </div>
                        </Flex>

                </div>
            );
        };
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderHeader={() => <div><span style={{fontSize:'1.2em'}}>全部商品</span><Icon  style={{float: 'right'}} type='right'/></div>}
                renderFooter={() => <div style={{padding: 30, textAlign: 'center'}}>
                    {this.state.isLoading ? '加载中...' : '加载完毕'}
                </div>}
                renderRow={row}
                renderSeparator={separator}
                className="am-list"
                pageSize={4}
                scrollRenderAheadDistance={500}
                scrollEventThrottle={20}
                onScroll={() => {
                    console.log('scroll');
                }}
                useBodyScroll
                onEndReached={this.onEndReached}
                onEndReachedThreshold={10}
            />
        );
    },
});

export default Demo