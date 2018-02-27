import React, { Component } from 'react';

class FormGroup extends Component{
    constructor(props){
        super(props);
    }

    getFormClass(){
        return "form-group " + this.props.formGroup;
    }

    render(){
        return(
            <div className={this.getFormClass()}>
                <label className="font-weight-bold">{this.props.label}</label>
                <input className="form-control" type={this.props.type} value={this.props.value} onChange={this.props.onChange} />
            </div>
        );
    }
}

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

    handleLinesColorChange = (e) => {
        this.props.onLinesColorChange(e.target.value);
    }


    sendCode(){
        var html = document.getElementById("option1");
        console.log(html.innerHTML);
    }

    render() {
        return (       
            <div id="customizationOptions-1" className="py-3">
            <h4 className="">Option 1 Customizations</h4>
                <div className="card mt-3">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#headerOptionsCollapse-1">Header Customization Options</button></h3>
                    </div>
                    <div id="headerOptionsCollapse-1" className="collapse" data-parent="customizationOptions-1">
                        <div className="card-body">
                            <div className="form-row">
                                <h4 className="w-100">Header</h4>
                                <FormGroup formGroup="col-md-12" label="Text" value={this.props.state.headerText} onChange={this.handleHeaderTextChange} />
                                <FormGroup formGroup="col-md-6" label="Text Color" value={this.props.state.headerTextColor} onChange={this.handleHeaderTextColorChange} />
                                <FormGroup formGroup="col-md-6" label="Background Color" value={this.props.state.headerBackGroundColor} onChange={this.handleHeaderBackGroundColorChange} />
                                <FormGroup formGroup="col-md-6" label="Border Color" value={this.props.state.headerBorderColor} onChange={this.handleHeaderBorderColorChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#linesOptionsCollapse-1">Lines Customization Options</button></h3>
                    </div>
                    <div id="linesOptionsCollapse-1" className="collapse" data-parent="customizationOptions-1">
                        <div className="card-body">
                            <div className="form-row">
                                <h4 className="w-100">Lines</h4>
                                <FormGroup formGroup="col-md-6" label="Lines Color" value={this.props.state.linesColor} onChange={this.handleLinesColorChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#barOptionsCollapse-1">Bar Customization Options</button></h3>
                    </div>
                    <div id="barOptionsCollapse-1" className="collapse" data-parent="customizationOptions-1">
                        <div className="card-body">
                            <div className="form-row">
                                <h4 className="w-100">Bar</h4>
                                <FormGroup formGroup="col-md-6" label="Bar Color" value={this.props.state.barColor} onChange={this.handleBarColorChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#mainOptionsCollapse-1">Main Customization Options</button></h3>
                    </div>
                    <div id="mainOptionsCollapse-1" className="collapse" data-parent="customizationOptions-1">
                        <div className="card-body">
                            <div className="form-row">
                                <h4 className="w-100">Main Content</h4>
                                <div className="form-group col-md-12">
                                    <label className="font-weight-bold"> Sub Heading Text </label>
                                    <div className="form-check form-check-inline ml-4">
                                        <input className="form-check-input" type="checkbox" value={this.props.state.isSubHeadingBold} onChange={this.handleIsSubHeadingBoldChange} />
                                        <label className="form-check-label" htmlFor="boldedSubHeading">Bold</label>
                                    </div>
                                    <textarea className="form-control" rows="5" title="input" value={this.props.state.subHeadingText} onChange={this.handleSubHeadingTextChange} />
                                </div>
                                <FormGroup formGroup="col-md-12" label="Main Text" value={this.props.state.mainMessageText} onChange={this.handleMainMessageTextChange} />
                                <FormGroup formGroup="col-md-6" label="Button Text" value={this.props.state.actionButtonText} onChange={this.handleActionButtonTextChange} />
                                <FormGroup formGroup="col-md-6" label="Button Color" value={this.props.state.actionButtonColor} onChange={this.handleActionButtonColorChange} />
                                <FormGroup formGroup="col-md-6" label="Button Href" value="" onChange="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#sendCollapse-1">Send this design to your CSM</button></h3>
                    </div>
                    <div id="sendCollapse-1" className="collapse" data-parent="customizationOptions-1">
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

export class Option3 extends Component {
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

    handleHeaderTextColorChange = (e) => {
        this.props.onHeaderTextColorChange(e.target.value);
    }

    handleLinesColorChange = (e) => {
        this.props.onLinesColorChange(e.target.value);
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
        var html = document.getElementById("option3");
        console.log(html.innerHTML);
    }

    render() {
        return (       
            <div id="customizationOptions-3" className="py-3">
            <h4 className="">Option 3 Customizations</h4>
                <div className="card mt-3">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#headerOptionsCollapse-3">Header Customization Options</button></h3>
                    </div>
                    <div id="headerOptionsCollapse-3" className="collapse" data-parent="customizationOptions-3">
                        <div className="card-body">
                            <div className="form-row">
                                <h4 className="w-100">Header</h4>
                                <FormGroup formGroup="col-md-12" label="Text" value={this.props.state.headerText} onChange={this.handleHeaderTextChange} />
                                <FormGroup formGroup="col-md-6" label="Text Color" value={this.props.state.headerTextColor} onChange={this.handleHeaderTextColorChange} />
                                <FormGroup formGroup="col-md-6" label="Background Color" value={this.props.state.headerBackGroundColor} onChange={this.handleHeaderBackGroundColorChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#linesOptionsCollapse-3">Lines Customization Options</button></h3>
                    </div>
                    <div id="linesOptionsCollapse-3" className="collapse" data-parent="customizationOptions-3">
                        <div className="card-body">
                            <div className="form-row">
                                <h4 className="w-100">Lines</h4>
                                <FormGroup formGroup="col-md-6" label="Lines Color" value={this.props.state.linesColor} onChange={this.handleLinesColorChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#mainOptionsCollapse-3">Main Customization Options</button></h3>
                    </div>
                    <div id="mainOptionsCollapse-3" className="collapse" data-parent="customizationOptions-3">
                        <div className="card-body">
                            <div className="form-row">
                                <h4 className="w-100">Main Content</h4>
                                <div className="form-group col-md-12">
                                    <label className="font-weight-bold"> Sub Heading Text </label>
                                    <div className="form-check form-check-inline ml-4">
                                        <input className="form-check-input" type="checkbox" value={this.props.state.isSubHeadingBold} onChange={this.handleIsSubHeadingBoldChange} />
                                        <label className="form-check-label" htmlFor="boldedSubHeading">Bold</label>
                                    </div>
                                    <textarea className="form-control" rows="5" title="input" value={this.props.state.subHeadingText} onChange={this.handleSubHeadingTextChange} />
                                </div>
                                <FormGroup formGroup="col-md-12" label="Main Text" value={this.props.state.mainMessageText} onChange={this.handleMainMessageTextChange} />
                                <FormGroup formGroup="col-md-6" label="Button Text" value={this.props.state.actionButtonText} onChange={this.handleActionButtonTextChange} />
                                <FormGroup formGroup="col-md-6" label="Button Color" value={this.props.state.actionButtonColor} onChange={this.handleActionButtonColorChange} />
                                <FormGroup formGroup="col-md-6" label="Button Href" value="" onChange="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#sendCollapse-3">Send this design to your CSM</button></h3>
                    </div>
                    <div id="sendCollapse-3" className="collapse" data-parent="customizationOptions-3">
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



export class Option4 extends Component {
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
        var html = document.getElementById("option4");
        console.log(html.innerHTML);
    }

    render() {
        return (       
            <div id="customizationOptions-4" className="py-3">
            <h4 className="">Option 4 Customizations</h4>
                <div className="card mt-3">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#headerOptionsCollapse-4">Header Customization Options</button></h3>
                    </div>
                    <div id="headerOptionsCollapse-4" className="collapse" data-parent="customizationOptions-4">
                        <div className="card-body">
                            <div className="form-row">
                                <h4 className="w-100">Header</h4>
                                <FormGroup formGroup="col-md-12" label="Text" value={this.props.state.headerText} onChange={this.handleHeaderTextChange} />
                                <FormGroup formGroup="col-md-6" label="Text Color" value={this.props.state.headerTextColor} onChange={this.handleHeaderTextColorChange} />
                                <FormGroup formGroup="col-md-6" label="Background Color" value={this.props.state.headerBackGroundColor} onChange={this.handleHeaderBackGroundColorChange} />
                                <FormGroup formGroup="col-md-6" label="Border Color" value={this.props.state.headerBorderColor} onChange={this.handleHeaderBorderColorChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#barOptionsCollapse-4">Bar Customization Options</button></h3>
                    </div>
                    <div id="barOptionsCollapse-4" className="collapse" data-parent="customizationOptions-4">
                        <div className="card-body">
                            <div className="form-row">
                                <h4 className="w-100">Bar</h4>
                                <FormGroup formGroup="col-md-6" label="Bar Color" value={this.props.state.barColor} onChange={this.handleBarColorChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#mainOptionsCollapse-4">Main Customization Options</button></h3>
                    </div>
                    <div id="mainOptionsCollapse-4" className="collapse" data-parent="customizationOptions-4">
                        <div className="card-body">
                            <div className="form-row">
                                <h4 className="w-100">Main Content</h4>
                                <div className="form-group col-md-12">
                                    <label className="font-weight-bold"> Sub Heading Text </label>
                                    <div className="form-check form-check-inline ml-4">
                                        <input className="form-check-input" type="checkbox" value={this.props.state.isSubHeadingBold} onChange={this.handleIsSubHeadingBoldChange} />
                                        <label className="form-check-label" htmlFor="boldedSubHeading">Bold</label>
                                    </div>
                                    <textarea className="form-control" rows="5" title="input" value={this.props.state.subHeadingText} onChange={this.handleSubHeadingTextChange} />
                                </div>
                                <FormGroup formGroup="col-md-12" label="Main Text" value={this.props.state.mainMessageText} onChange={this.handleMainMessageTextChange} />
                                <FormGroup formGroup="col-md-6" label="Button Text" value={this.props.state.actionButtonText} onChange={this.handleActionButtonTextChange} />
                                <FormGroup formGroup="col-md-6" label="Button Color" value={this.props.state.actionButtonColor} onChange={this.handleActionButtonColorChange} />
                                <FormGroup formGroup="col-md-6" label="Button Href" value="" onChange="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#sendCollapse-4">Send this design to your CSM</button></h3>
                    </div>
                    <div id="sendCollapse-4" className="collapse" data-parent="customizationOptions-4">
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

