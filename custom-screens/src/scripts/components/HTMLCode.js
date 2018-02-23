import React, {Component} from "react";
import * as CSSStyles from "./CSSStyles.js";


export class Option1 extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="option-1" id="option1">
                    <div className="header" style={{background: this.props.headerBackGround  }}>
                        <p className="header-text">{this.props.headerText}</p>
                    </div>
                    <div className="col-wrap">
                        <div className="col-25">
                            <div className="bar">
                            </div>
                        </div>
                        <div className="col-75">
                            <p className="sub-heading">{this.props.subHeadingText}</p>
                            <a className="action-button" href="#" target="_blank">{this.props.actionButtonText}</a>
                    </div>
                </div>
            </div>
        );
    }
}