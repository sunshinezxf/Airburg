import React from 'react';
import {ListView,Icon,Flex,SegmentedControl, WhiteSpace, WingBlank}  from 'antd-mobile';
import LazyLoad from 'react-lazyload';

const CommentBlock=React.createClass({
   render(){
       var comment = this.props.comment;
       return (
           <div>
               <Flex>
                       <div style={{marginRight: 8}}>
                   <LazyLoad height={100} offset={100}>
                       <img style={{height: '100px'}} src={comment.img}/>
                   </LazyLoad></div>
                   <div style={{width:'100%'}}>
                       <p style={{color:'grey'}}>{comment.user}<span> {comment.start}分</span><span style={{float:'right'}}> {comment.date}</span></p>
                       <p>{comment.content}</p>

                   </div>
               </Flex>
           </div>
       );
   }
});

const Comments=React.createClass({
    getInitialState(){
        return{
            selectedIndex:0
        }
    },
    onChange(e) {
        var index=e.nativeEvent.selectedSegmentIndex;
        console.log(`selectedIndex:${index}`);
    },
    onValueChange(value) {
        console.log(value);
    },
    render(){
        var list=this.props.comments.map((comment,i)=>{
           return <CommentBlock key={i} comment={comment}/>
        });
        return (
            <div width={'100%'}>
                <WhiteSpace/>
                <SegmentedControl selectedIndex={this.state.selectedIndex}
                    values={['全部', '好评', '中评','差评']}
                    onChange={this.onChange}
                    onValueChange={this.onValueChange}
                />
                <WhiteSpace size="lg" />
                {list}
                <div style={{height:'120px'}}/>
            </div>
        )
    }
})

export default Comments