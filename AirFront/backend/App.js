import React from 'react';


export default App=React.createClass({
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
})