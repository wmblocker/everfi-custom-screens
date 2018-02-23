import React, { Component } from 'react';

export class Option1 extends Component{
    constructor(props){
        super(props);
        this.handleHeaderTextChange = this.handleHeaderTextChange.bind(this);
        this.handleSubHeadingTextChange = this.handleSubHeadingTextChange.bind(this);
        this.handleActionButtonTextChange = this.handleActionButtonTextChange.bind(this);
        this.handleHeaderBackGroundChange = this.handleHeaderBackGroundChange.bind(this);

    }

    handleHeaderTextChange(e){
        this.props.onHeaderTextChange(e.target.value);
    }

    handleSubHeadingTextChange(e){
        this.props.onSubHeadingTextChange(e.target.value);
    }

    handleActionButtonTextChange(e){
        this.props.onActionButtonTextChange(e.target.value);
    }

    handleHeaderBackGroundChange(e){
        this.props.onHeaderBackGroundChange(e.target.value);

    }

    render(){
        return(
            <form>
                <div className="form-row">
                    <div className="form-group">
                        <input className="form-control" type="text" title="input" value={this.props.headerText} onChange={this.handleHeaderTextChange}/>
                    </div>
                </div>
                
                <div className="form-row">
                    <div className="form-group">
                        <input className="form-control" type="text" title="input" value={this.props.subHeadingText} onChange={this.handleSubHeadingTextChange}/>
                    </div>
                </div>
                
                <div className="form-row">
                    <div className="form-group">
                        <input className="form-control" type="text" title="input" value={this.props.actionButtonText} onChange={this.handleActionButtonTextChange}/>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <input className="form-control" type="text" title="input" value={this.props.headerBackGround} onChange={this.handleHeaderBackGroundChange}/>
                    </div>
                </div>
            </form>
        );
    }
}
