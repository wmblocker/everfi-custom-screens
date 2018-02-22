import React, { Component } from 'react';

class CSOptions extends Component{
    constructor(props){
        super(props);
        this.handleHeaderTextChange = this.handleHeaderTextChange.bind(this);
    }

    handleHeaderTextChange(e){
        this.props.onHeaderTextChange(e.target.value);
    }

    render(){
        return(
            <input type="text" title="input" value={this.props.headerText} onChange={this.handleHeaderTextChange}/>
        );
    }
}

export default CSOptions;