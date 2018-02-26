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
                        background: this.props.headerBackGroundColor,
                        borderBottomColor: this.props.headerBorderColor
                        }}>
                        <p className="cs-header-text" style={{color: this.props.headerTextColor}}>{this.props.headerText}</p>
                    </div>
                    <div className="col-wrap">
                        <div className="col-25">
                            <div className="cs-bar" style={{background: this.props.barColor}}>
                            </div>
                        </div>
                        <div className="col-75">
                            <p className="cs-sub-heading" style={{
                                fontWeight: this.props.isSubHeadingBold
                                }}>{this.props.subHeadingText}</p>
                            <p className="mainMessage">{this.props.mainMessageText}</p>
                            <a className="action-button" style={{backgroundColor: this.props.actionButtonColor}} href="#" target="_blank">{this.props.actionButtonText}</a>
                    </div>
                </div>
            </div>
        );
    }
}