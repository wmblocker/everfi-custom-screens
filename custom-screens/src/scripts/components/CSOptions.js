import React, { Component } from 'react';


export class Option1 extends Component {
    constructor(props) {
        super(props);
        this.handleHeaderTextChange = this.handleHeaderTextChange.bind(this);
        this.handleSubHeadingTextChange = this.handleSubHeadingTextChange.bind(this);
        this.handleActionButtonTextChange = this.handleActionButtonTextChange.bind(this);
        this.handleHeaderBackGroundChange = this.handleHeaderBackGroundChange.bind(this);
        this.handleHeaderBorderChange = this.handleHeaderBorderChange.bind(this);
        this.handleBarColorChange = this.handleBarColorChange.bind(this);

    }

    handleHeaderTextChange(e) {
        this.props.onHeaderTextChange(e.target.value);
    }

    handleSubHeadingTextChange(e) {
        this.props.onSubHeadingTextChange(e.target.value);
    }

    handleActionButtonTextChange(e) {
        this.props.onActionButtonTextChange(e.target.value);
    }

    handleHeaderBackGroundChange(e) {
        this.props.onHeaderBackGroundChange(e.target.value);
    }

    handleHeaderBorderChange(e) {
        this.props.onHeaderBorderChange(e.target.value);
    }

    handleBarColorChange(e){
        this.props.onBarColorChange(e.target.value);
    }

    render() {
        return (       
            <div id="customizationOptions" className="py-3">
            <h4 className="">Option 1 Customizations</h4>
                <div className="card mt-3">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#headerOptionsCollapse">Header Customization Options</button></h3>
                    </div>
                    <div id="headerOptionsCollapse" className="collapse" data-parent="accordion">
                        <div className="card-body">
                            <div className="form-row">
                                <h4 className="w-100">Header</h4>
                                <div className="form-group col-md-12">
                                    <label for="headerText">Text</label>
                                    <input className="form-control" type="text" title="input" value={this.props.headerText} onChange={this.handleHeaderTextChange} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="headerTextColor">Text Color</label>
                                    <input className="form-control" type="text" title="input" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="headerBackGroundColor">Background Color</label>
                                    <input className="form-control" type="text" title="input" value={this.props.headerBackGround} onChange={this.handleHeaderBackGroundChange} />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#barOptionsCollapse">Bar Customization Options</button></h3>
                    </div>
                    <div id="barOptionsCollapse" className="collapse" data-parent="accordion">
                        <div className="card-body">
                            <div className="form-row">
                                <h4 className="w-100">Bar</h4>
                                <div className="form-group">
                                    <label for="barColor" > Bar Color</label>
                                    <input className="form-control" type="text" title="input" value={this.props.barColor} onChange={this.handleBarColorChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#mainOptionsCollapse">Main Customization Options</button></h3>
                    </div>
                    <div id="mainOptionsCollapse" className="collapse" data-parent="accordion">
                        <div className="card-body">
                            <div className="form-row">
                                <h4 className="w-100">Main Content</h4>
                                <div className="form-group">
                                    <input className="form-control" type="text" title="input" value={this.props.actionButtonText} onChange={this.handleActionButtonTextChange} />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="text" title="input" value={this.props.subHeadingText} onChange={this.handleSubHeadingTextChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
