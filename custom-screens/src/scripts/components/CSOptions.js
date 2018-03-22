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

    handleButtonHrefChange = (e) => {
        this.props.onButtonHrefChange(e.target.value);
    }


    sendCode(){
        var html = document.getElementById("option1").innerHTML;
        var copyElem = document.createElement("input");
        copyElem.setAttribute("value", html);
        document.body.appendChild(copyElem);
        copyElem.select();
        document.execCommand("copy");
        document.body.removeChild(copyElem);
    }

    render() {
        return (       
            <div id="customizationOptions-1">
            <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#globalOptionsCollapse-1">Global <i class="fa fa-chevron-down" /></button></h3>
                    </div>
                    <div id="globalOptionsCollapse-1" className="collapse" data-parent="customizationOptions-1">
                        <div className="card-body">
                            <div className="form-row">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#headerOptionsCollapse-1">Header <i class="fa fa-chevron-down"></i></button></h3>
                    </div>
                    <div id="headerOptionsCollapse-1" className="collapse" data-parent="customizationOptions-1">
                        <div className="card-body">
                            <div className="form-row">

                                <FormGroup formGroup="col-md-12" label="Text" value={this.props.state.headerText} onChange={this.handleHeaderTextChange} />
                                <FormGroup formGroup="col-md-6" label="Text Color" value={this.props.state.headerTextColor} onChange={this.handleHeaderTextColorChange} />
                                <FormGroup formGroup="col-md-6" label="Background Color" value={this.props.state.headerBackGroundColor} onChange={this.handleHeaderBackGroundColorChange} />
                                <FormGroup formGroup="col-md-6" label="Border Color" value={this.props.state.headerBorderColor} onChange={this.handleHeaderBorderColorChange} />
                                <FormGroup formGroup="col-md-6" label="Lines Color" value={this.props.state.linesColor} onChange={this.handleLinesColorChange} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#mainOptionsCollapse-1">Main <i class="fa fa-chevron-down"></i></button></h3>

                    </div>
                    <div id="mainOptionsCollapse-1" className="collapse" data-parent="customizationOptions-1">
                        <div className="card-body">
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label className="font-weight-bold"> Sub Heading Text </label>
                                    <div className="form-check form-check-inline ml-4">
                                        <input className="form-check-input" type="checkbox" value={this.props.state.isSubHeadingBold} onChange={this.handleIsSubHeadingBoldChange} />
                                        <label className="form-check-label" htmlFor="boldedSubHeading">Bold</label>
                                    </div>
                                    <textarea className="form-control" rows="5" title="input" value={this.props.state.subHeadingText} onChange={this.handleSubHeadingTextChange} /><br />
                                    <label className="font-weight-bold"> Body Text </label>
                                    <textarea className="form-control" rows="5" title="input"value={this.props.state.mainMessageText} onChange={this.handleMainMessageTextChange} />
                                    
                                </div>
                            </div>
                            <div className="form-row">
                                    <FormGroup formGroup="col-md-6" label="Bar Color" value={this.props.state.barColor} onChange={this.handleBarColorChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#buttonCollapse-8">Button <i class="fa fa-chevron-down"></i></button></h3>
                    </div>
                    <div id="buttonCollapse-8" className="collapse" data-parent="buttonOptions-8">
                        <div className="card-body">
                            <div className="form-row">
                                <FormGroup formGroup="col-md-6" label="Button Text" value={this.props.state.actionButtonText} onChange={this.handleActionButtonTextChange} />
                                <FormGroup formGroup="col-md-6" label="Button Color" value={this.props.state.actionButtonColor} onChange={this.handleActionButtonColorChange} />
                                <FormGroup formGroup="col-md-6" label="Button Href" value={this.props.buttonHref} onChange={this.handleButtonHrefChange} /> <i class="fa fa-question-circle"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#sendCollapse-1">Review <i class="fa fa-chevron-down"></i></button></h3>
                    </div>
                    <div id="sendCollapse-1" className="collapse show" data-parent="customizationOptions-1">
                        <div className="card-body">
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <p>Copy code to your clipboard</p>
                                    <button className="btn btn-primary btn-send" onClick={this.sendCode}>Copy Code</button>
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

    handleButtonHrefChange = (e) => {
        this.props.onButtonHrefChange(e.target.value);
    }

    sendCode(){
        var html = document.getElementById("option3").innerHTML;
        var copyElem = document.createElement("input");
        copyElem.setAttribute("value", html);
        document.body.appendChild(copyElem);
        copyElem.select();
        document.execCommand("copy");
        document.body.removeChild(copyElem);
    }

    render() {
        return (       
            <div id="customizationOptions-3">
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#headerOptionsCollapse-3">Header </button></h3>
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
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#linesOptionsCollapse-3">Lines </button></h3>
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
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#mainOptionsCollapse-3">Main </button></h3>
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
                                    <textarea className="form-control" rows="5" title="input"value={this.props.state.mainMessageText} onChange={this.handleMainMessageTextChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#buttonCollapse-8">Button</button></h3>
                    </div>
                    <div id="buttonCollapse-8" className="collapse" data-parent="buttonOptions-8">
                        <div className="card-body">
                            <div className="form-row">
                                <FormGroup formGroup="col-md-6" label="Button Text" value={this.props.state.actionButtonText} onChange={this.handleActionButtonTextChange} />
                                <FormGroup formGroup="col-md-6" label="Button Color" value={this.props.state.actionButtonColor} onChange={this.handleActionButtonColorChange} />
                                <FormGroup formGroup="col-md-6" label="Button Href" value={this.props.buttonHref} onChange={this.handleButtonHrefChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#sendCollapse-3">Review</button></h3>
                    </div>
                    <div id="sendCollapse-3" className="collapse" data-parent="customizationOptions-3">
                        <div className="card-body">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <button className="btn btn-primary btn-send" onClick={this.sendCode}>Copy Code</button>
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

    handleButtonHrefChange = (e) => {
        this.props.onButtonHrefChange(e.target.value);
    }

    sendCode(){
        var html = document.getElementById("option4").innerHTML;
        var copyElem = document.createElement("input");
        copyElem.setAttribute("value", html);
        document.body.appendChild(copyElem);
        copyElem.select();
        document.execCommand("copy");
        document.body.removeChild(copyElem);
    }

    render() {
        return (       
            <div id="customizationOptions-4">
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#headerOptionsCollapse-4">Header </button></h3>
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
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#barOptionsCollapse-4">Bar </button></h3>
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
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#mainOptionsCollapse-4">Main </button></h3>
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
                                <textarea className="form-control" rows="5" title="input"value={this.props.state.mainMessageText} onChange={this.handleMainMessageTextChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#buttonCollapse-8">Button</button></h3>
                    </div>
                    <div id="buttonCollapse-8" className="collapse" data-parent="buttonOptions-8">
                        <div className="card-body">
                            <div className="form-row">
                                <FormGroup formGroup="col-md-6" label="Button Text" value={this.props.state.actionButtonText} onChange={this.handleActionButtonTextChange} />
                                <FormGroup formGroup="col-md-6" label="Button Color" value={this.props.state.actionButtonColor} onChange={this.handleActionButtonColorChange} />
                                <FormGroup formGroup="col-md-6" label="Button Href" value={this.props.buttonHref} onChange={this.handleButtonHrefChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#sendCollapse-7">Review</button></h3>
                    </div>
                    <div id="sendCollapse-7" className="collapse" data-parent="customizationOptions-7">
                        <div className="card-body">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <button className="btn btn-primary btn-send" onClick={this.sendCode}>Copy Code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export class Option6 extends Component {
    constructor(props) {
        super(props);
    }

    handleHeaderTextChange = (e) => {
        this.props.onHeaderTextChange(e.target.value);
    }

    handleMainMessageTextChange = (e) => {
        this.props.onMainMessageTextChange(e.target.value);
    }

    handleMainMessageTextColorChange = (e) => {
        this.props.onMainMessageTextColorChange(e.target.value);
    }

    handleActionButtonTextChange = (e) => {
        this.props.onActionButtonTextChange(e.target.value);
    }

    handleActionButtonColorChange = (e) => {
        this.props.onActionButtonColorChange(e.target.value);
    }

    handleHeaderTextColorChange = (e) => {
        this.props.onHeaderTextColorChange(e.target.value);
    }

    handleBarColorChange = (e) => {
        this.props.onBarColorChange(e.target.value);
    }

    handleButtonHrefChange = (e) => {
        this.props.onButtonHrefChange(e.target.value);
    }

    handleRightColumnBackGroundColorChange = (e) => {
        this.props.onRightColumnBackGroundColorChange(e.target.value)
    }

    handleLeftColumnBackGroundColorChange = (e) => {
        this.props.onLeftColumnBackGroundColorChange(e.target.value)
    }


    sendCode(){
        var html = document.getElementById("option6").innerHTML;
        var copyElem = document.createElement("input");
        copyElem.setAttribute("value", html);
        document.body.appendChild(copyElem);
        copyElem.select();
        document.execCommand("copy");
        document.body.removeChild(copyElem);
    }

    render() {
        return (       
            <div id="customizationOptions-6">
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#headerOptionsCollapse-6">Header </button></h3>
                    </div>
                    <div id="headerOptionsCollapse-6" className="collapse" data-parent="customizationOptions-6">
                        <div className="card-body">
                            <div className="form-row">
                                <h4 className="w-100">Header</h4>
                                <FormGroup formGroup="col-md-12" label="Text" value={this.props.state.headerText} onChange={this.handleHeaderTextChange} />
                                <FormGroup formGroup="col-md-6" label="Text Color" value={this.props.state.headerTextColor} onChange={this.handleHeaderTextColorChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#mainOptionsCollapse-6">Main </button></h3>
                    </div>
                    <div id="mainOptionsCollapse-6" className="collapse" data-parent="customizationOptions-6">
                        <div className="card-body">
                            <div className="form-row">
                                <h4 className="w-100">Main Content</h4>
                                <label className="font-weight-bold"> Main Message Text </label>
                                <textarea className="form-control" rows="5" title="input" value={this.props.state.mainMessageText} onChange={this.handleMainMessageTextChange} />
                                <FormGroup formGroup="col-md-6" label="Main Message Text Color" value={this.props.state.mainMessageTextColor} onChange={this.handleMainMessageTextColorChange} />
                                <FormGroup formGroup="col-md-6" label="Left Column Background Color" value={this.props.state.leftColumnBackGroundColor} onChange={this.handleLeftColumnBackGroundColorChange} />
                                <FormGroup formGroup="col-md-6" label="Right Column Background Color" value={this.props.state.rightColumnBackGroundColor} onChange={this.handleRightColumnBackGroundColorChange} />
                                <FormGroup formGroup="col-md-6" label="Button Text" value={this.props.state.actionButtonText} onChange={this.handleActionButtonTextChange} />
                                <FormGroup formGroup="col-md-6" label="Button Color" value={this.props.state.actionButtonColor} onChange={this.handleActionButtonColorChange} />
                                <FormGroup formGroup="col-md-6" label="Button Href" value={this.props.buttonHref} onChange={this.handleButtonHrefChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#sendCollapse-6">Review</button></h3>
                    </div>
                    <div id="sendCollapse-6" className="collapse" data-parent="customizationOptions-6">
                        <div className="card-body">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <button className="btn btn-primary btn-send" onClick={this.sendCode}>Copy Code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export class Option7 extends Component {
    constructor(props) {
        super(props);
    }

    handleHeaderTextChange = (e) => {
        this.props.onHeaderTextChange(e.target.value);
    }

    handleMainMessageTextChange1 = (e) => {
        this.props.onMainMessageTextChange1(e.target.value);
    }

    handleMainMessageTextColorChange1 = (e) => {
        this.props.onMainMessageTextColorChange1(e.target.value);
    }

    handleMainMessageTextChange2 = (e) => {
        this.props.onMainMessageTextChange2(e.target.value);
    }

    handleMainMessageTextColorChange2 = (e) => {
        this.props.onMainMessageTextColorChange2(e.target.value);
    }

    handleActionButtonTextChange1 = (e) => {
        this.props.onActionButtonTextChange1(e.target.value);
    }

    handleActionButtonColorChange1 = (e) => {
        this.props.onActionButtonColorChange1(e.target.value);
    }

    handleActionButtonTextChange2 = (e) => {
        this.props.onActionButtonTextChange2(e.target.value);
    }

    handleActionButtonColorChange2 = (e) => {
        this.props.onActionButtonColorChange2(e.target.value);
    }

    handleHeaderTextColorChange = (e) => {
        this.props.onHeaderTextColorChange(e.target.value);
    }


    handleButtonHrefChange1 = (e) => {
        this.props.onButtonHrefChange1(e.target.value);
    }

    handleButtonHrefChange2 = (e) => {
        this.props.onButtonHrefChange2(e.target.value);
    }

    handleRightColumnBackGroundColorChange = (e) => {
        this.props.onRightColumnBackGroundColorChange(e.target.value)
    }

    handleLeftColumnBackGroundColorChange = (e) => {
        this.props.onLeftColumnBackGroundColorChange(e.target.value)
    }


    sendCode(){
        var html = document.getElementById("option7").innerHTML;
        var copyElem = document.createElement("input");
        copyElem.setAttribute("value", html);
        document.body.appendChild(copyElem);
        copyElem.select();
        document.execCommand("copy");
        document.body.removeChild(copyElem);
    }

    render() {
        return (       
            <div id="customizationOptions-7">
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#headerOptionsCollapse-7">Header </button></h3>
                    </div>
                    <div id="headerOptionsCollapse-7" className="collapse" data-parent="customizationOptions-7">
                        <div className="card-body">
                            <div className="form-row">
                                <h4 className="w-100">Header</h4>
                                <FormGroup formGroup="col-md-12" label="Text" value={this.props.state.headerText} onChange={this.handleHeaderTextChange} />
                                <FormGroup formGroup="col-md-6" label="Text Color" value={this.props.state.headerTextColor} onChange={this.handleHeaderTextColorChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#mainOptionsCollapse-7">Main </button></h3>
                    </div>
                    <div id="mainOptionsCollapse-7" className="collapse" data-parent="customizationOptions-7">
                        <div className="card-body">
                            <div className="form-row">
                                <h4 className="w-100">Message 1</h4>
                                <FormGroup formGroup="col-md-6" label="Left Column Background Color" value={this.props.state.leftColumnBackGroundColor} onChange={this.handleLeftColumnBackGroundColorChange} />
                                <FormGroup formGroup="col-md-6" label="Right Column Background Color" value={this.props.state.rightColumnBackGroundColor} onChange={this.handleRightColumnBackGroundColorChange} />
                                <label className="font-weight-bold"> Main Message Text </label>
                                <textarea className="form-control" rows="5" title="input" value={this.props.state.mainMessageText1} onChange={this.handleMainMessageTextChange1} />
                                <FormGroup formGroup="col-md-6" label="Main Message Text Color" value={this.props.state.mainMessageTextColor1} onChange={this.handleMainMessageTextColorChange1} />
                                <FormGroup formGroup="col-md-6" label="Button Text" value={this.props.state.actionButtonText1} onChange={this.handleActionButtonTextChange1} />
                                <FormGroup formGroup="col-md-6" label="Button Color" value={this.props.state.actionButtonColor1} onChange={this.handleActionButtonColorChange1} />
                                <FormGroup formGroup="col-md-6" label="Button Href" value={this.props.buttonHref1} onChange={this.handleButtonHrefChange1} />
                                <hr />
                                <h4 className="w-100">Message 2</h4>

                                <label className="font-weight-bold"> Main Message Text </label>
                                <textarea className="form-control" rows="5" title="input" value={this.props.state.mainMessageText2} onChange={this.handleMainMessageTextChange2} />
                                <FormGroup formGroup="col-md-6" label="Main Message Text Color" value={this.props.state.mainMessageTextColor2} onChange={this.handleMainMessageTextColorChange2} />
                                <FormGroup formGroup="col-md-6" label="Button Text" value={this.props.state.actionButtonText2} onChange={this.handleActionButtonTextChange2} />
                                <FormGroup formGroup="col-md-6" label="Button Color" value={this.props.state.actionButtonColor2} onChange={this.handleActionButtonColorChange2} />
                                <FormGroup formGroup="col-md-6" label="Button Href" value={this.props.buttonHref2} onChange={this.handleButtonHrefChange2} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#sendCollapse-7">Review</button></h3>
                    </div>
                    <div id="sendCollapse-7" className="collapse" data-parent="customizationOptions-7">
                        <div className="card-body">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <button className="btn btn-primary btn-send" onClick={this.sendCode}>Copy Code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export class Option8 extends Component {
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

    handleMainMessageTextColorChange = (e) => {
        this.props.onMainMessageTextColorChange(e.target.value);
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

    handleButtonHrefChange = (e) => {
        this.props.onButtonHrefChange(e.target.value);
    }

    sendCode(){
        var html = document.getElementById("option8").innerHTML;
        var copyElem = document.createElement("input");
        copyElem.setAttribute("value", html);
        document.body.appendChild(copyElem);
        copyElem.select();
        document.execCommand("copy");
        document.body.removeChild(copyElem);
    }

    render() {
        return (       
            <div id="customizationOptions-8">
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#headerOptionsCollapse-8">Header </button></h3>
                    </div>
                    <div id="headerOptionsCollapse-8" className="collapse" data-parent="customizationOptions-8">
                        <div className="card-body">
                            <div className="form-row">
                                <h4 className="w-100">Header</h4>
                                <FormGroup formGroup="col-md-12" label="Text" value={this.props.state.headerText} onChange={this.handleHeaderTextChange} />
                                <FormGroup formGroup="col-md-6" label="Text Color" value={this.props.state.headerTextColor} onChange={this.handleHeaderTextColorChange} />
                                <FormGroup formGroup="col-md-6" label="Border Color" value={this.props.state.headerBorderColor} onChange={this.handleHeaderBorderColorChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#mainOptionsCollapse-8">Main </button></h3>
                    </div>
                    <div id="mainOptionsCollapse-8" className="collapse" data-parent="customizationOptions-8">
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
                                <label className="font-weight-bold"> Main Message Text </label>
                                <textarea className="form-control" rows="5" title="input"value={this.props.state.mainMessageText} onChange={this.handleMainMessageTextChange} />
                                <FormGroup formGroup="col-md-6" label="Main Message Text Color" value={this.props.state.mainMessageTextColor} onChange={this.handleMainMessageTextColorChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#buttonCollapse-8">Button</button></h3>
                    </div>
                    <div id="buttonCollapse-8" className="collapse" data-parent="buttonOptions-8">
                        <div className="card-body">
                            <div className="form-row">
                                <FormGroup formGroup="col-md-6" label="Button Text" value={this.props.state.actionButtonText} onChange={this.handleActionButtonTextChange} />
                                <FormGroup formGroup="col-md-6" label="Button Color" value={this.props.state.actionButtonColor} onChange={this.handleActionButtonColorChange} />
                                <FormGroup formGroup="col-md-6" label="Button Href" value={this.props.buttonHref} onChange={this.handleButtonHrefChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3><button className="btn btn-link" data-toggle="collapse" data-target="#sendCollapse-8">Review</button></h3>
                    </div>
                    <div id="sendCollapse-8" className="collapse" data-parent="customizationOptions-8">
                        <div className="card-body">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <button className="btn btn-primary btn-send" onClick={this.sendCode}>Copy Code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}