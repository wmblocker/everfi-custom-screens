import React, { Component } from 'react';

export class Option1 extends Component {
    constructor(props) {
        super(props);
    }

    handleHeaderTextChange = (e) => {
        this.props.onHeaderTextChange(e.target.value);
    }

    handleSubHeadingTextChange = (e) => {
        this.props.onSubHeadingTextChange(e.target.value);
    }

    handleMainMessageTextChange = (e) => {
        this.props.onMainMessageTextChange(e.target.value);
    }

    handleActionButtonTextChange = (e) => {
        this.props.onActionButtonTextChange(e.target.value);
    }

    handleActionButtonColorChange = (e) => {
        this.props.onActionButtonColorChange(e.target.value);
    }

    handleHeaderBackGroundColorChange = (e) => {
        this.props.onHeaderBackGroundColorChange(e.target.value);
    }

    handleHeaderBorderColorChange = (e) => {
        this.props.onHeaderBorderColorChange(e.target.value);
    }

    handleHeaderTextColorChange = (e) => {
        this.props.onHeaderTextColorChange(e.target.value);
    }

    handleBarColorChange = (e) => {
        this.props.onBarColorChange(e.target.value);
    }

    handleIsSubHeadingBoldChange = (e) => {
        if(e.target.checked == true){
        this.props.onIsSubHeadingBoldChange("bold");
        }
        else{
            this.props.onIsSubHeadingBoldChange("normal");
        }
    }

    sendCode(){
        var html = document.getElementById("option1");
        console.log(html.innerHTML);
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
                                    <label htmlFor="headerText">Text</label>
                                    <input className="form-control" type="text" title="input" value={this.props.state.headerText} onChange={this.handleHeaderTextChange} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="headerTextColor">Text Color</label>
                                    <input className="form-control" type="text" title="input" value={this.props.state.headerTextColor} onChange={this.handleHeaderTextColorChange} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="headerBackGroundColor">Background Color</label>
                                    <input className="form-control" type="text" title="input" value={this.props.state.headerBackGroundColor} onChange={this.handleHeaderBackGroundColorChange} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="headerBorderColor">Border Color</label>
                                    <input className="form-control" type="text" title="input" value={this.props.state.headerBorderColor} onChange={this.handleHeaderBorderColorChange} />
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
                                    <label htmlFor="barColor" > Bar Color</label>
                                    <input className="form-control" type="text" title="input" value={this.props.state.barColor} onChange={this.handleBarColorChange} />
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
                                <div className="form-group col-md-12">
                                    <label htmlFor="subHeadingText"> Sub Heading Text </label>
                                    <div className="form-check form-check-inline ml-4">
                                        <input className="form-check-input" type="checkbox" value={this.props.state.isSubHeadingBold} onChange={this.handleIsSubHeadingBoldChange} />
                                        <label className="form-check-label" for="boldedSubHeading">Bold</label>
                                    </div>
                                    <textarea className="form-control" rows="5" title="input" value={this.props.state.subHeadingText} onChange={this.handleSubHeadingTextChange} />
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="mainMessageText"> Main Text </label>
                                    <textarea className="form-control" rows="5" title="input" value={this.props.state.mainMessageText} onChange={this.handleMainMessageTextChange} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="Button Text"> Button Text </label>
                                    <input className="form-control" type="text" value={this.props.state.actionButtonText} onChange={this.handleActionButtonTextChange} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="Button Text"> Button Color </label>
                                    <input className="form-control" type="text" value={this.props.state.actionButtonColor} onChange={this.handleActionButtonColorChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#sendCollapse">Send this design to your CSM</button></h3>
                    </div>
                    <div id="sendCollapse" className="collapse" data-parent="accordion">
                        <div className="card-body">
                            <div className="form-row">
                                <h4 className="w-100"></h4>
                                <div className="form-group col-md-6">
                                    <button className="btn btn-primary" onClick={this.sendCode}>Send this design</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
