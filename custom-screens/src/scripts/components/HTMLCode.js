import React, {Component} from "react";
import * as CSSStyles from "./CSSStyles.js";

export class Option1 extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="option-1">
                    <div className="cs-header" style={{
                        background: this.props.state.headerBackGroundColor,borderBottomColor: this.props.state.headerBorderColor
                        }}>
                        <div className="lines" style={{borderColor: this.props.state.linesColor}}></div>
                        <p className="cs-header-text" style={{color: this.props.state.headerTextColor}}>{this.props.state.headerText}</p>
                    </div>
                    <div className="col-wrap">
                        <div className="col-30">
                            <div className="cs-bar" style={{background: this.props.state.barColor}}>
                            </div>
                        </div>
                        <div className="col-70">
                            <p className="cs-sub-heading" style={{
                                fontWeight: this.props.state.isSubHeadingBold
                                }}>{this.props.state.subHeadingText}</p>
                            <p className="mainMessage">{this.props.state.mainMessageText}</p>
                            <a className="action-button" style={{backgroundColor: this.props.state.actionButtonColor}} href={this.props.state.buttonHref} target="_blank">{this.props.state.actionButtonText}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export class Option3 extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="option-3">
                    <div className="cs-header" style={{
                        background: this.props.state.headerBackGroundColor
                        }}>
                        <div className="lines" style={{borderColor: this.props.state.linesColor}}></div>
                        <p className="cs-header-text" style={{color: this.props.state.headerTextColor}}>{this.props.state.headerText}</p>
                    </div>
                    <div className="col-wrap">
                        <div className="col-98">
                            <p className="cs-sub-heading" style={{
                                fontWeight: this.props.state.isSubHeadingBold
                                }}>{this.props.state.subHeadingText}</p>
                            <p className="mainMessage">{this.props.state.mainMessageText}</p>
                            <a className="action-button" style={{backgroundColor: this.props.state.actionButtonColor}} href={this.props.state.buttonHref}  target="_blank">{this.props.state.actionButtonText}</a>
                    </div>
                </div>
            </div>
        );
    }
}


export class Option4 extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="option-4">
                    <div className="cs-header" style={{
                        background: this.props.state.headerBackGroundColor,
                        borderBottomColor: this.props.state.headerBorderColor
                        }}>
                        <p className="cs-header-text" style={{color: this.props.state.headerTextColor}}>{this.props.state.headerText}</p>
                    </div>
                    <div className="col-wrap">
                        <div className="col-25">
                            <div className="cs-bar" style={{background: this.props.state.barColor}}>
                            </div>
                        </div>
                        <div className="col-75">
                            <p className="cs-sub-heading" style={{
                                fontWeight: this.props.state.isSubHeadingBold
                                }}>{this.props.state.subHeadingText}</p>
                            <p className="mainMessage">{this.props.state.mainMessageText}</p>
                            <a className="action-button" style={{backgroundColor: this.props.state.actionButtonColor}} href={this.props.state.buttonHref}  target="_blank">{this.props.state.actionButtonText}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export class Option6 extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="option-6">
                    <div className="col-wrap">
                        <div className="col-50" style={{backgroundColor: this.props.state.leftColumnBackGroundColor}}>
                            <div className="cs-header">
                                <p className="cs-header-text" style={{color: this.props.state.headerTextColor}}>{this.props.state.headerText}
                                </p>
                            </div>
                        </div>
                        <div className="col-50" style={{backgroundColor: this.props.state.rightColumnBackGroundColor}}>
                            <p className="mainMessage" style={{color: this.props.state.mainMessageTextColor}}>{this.props.state.mainMessageText}</p>
                            <a className="action-button" style={{backgroundColor: this.props.state.actionButtonColor}} href={this.props.state.buttonHref}  target="_blank">{this.props.state.actionButtonText}</a>
                    </div>
                </div>
            </div>
        );
    }
}