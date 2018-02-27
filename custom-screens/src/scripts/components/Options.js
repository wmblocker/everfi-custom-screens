import React, {Component} from "react";
import * as CSOptions from "./CSOptions.js";
import * as HTMLCode from "./HTMLCode.js"
import * as CSSStyles from "./CSSStyles.js"

export class Option1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            headerText: "Did You Know?",
            headerTextColor: "#fff", 
            subHeadingText: "We offer Associates tools to help manage insurance costs.", actionButtonText: "Learn More", 
            actionButtonColor: "#208aee",
            headerBackGroundColor: "#5bbaed",
            headerBorderColor: "#208aee",  
            isSubHeadingBold: "normal",
            mainMessageText: "Wherever you are in life, there is a plan to help you meet your needs.Visit us to learn more about the options available to you.",
            barColor: "#5bbaed",
            linesColor: "#208aee"
        };
    }

    handleHeaderTextChange = (updatedText) => {
        this.setState({
            headerText : updatedText
        });
    }

    handleSubHeadingTextChange = (updatedText) => {
        this.setState({
            subHeadingText : updatedText
        });
    }

    handleIsSubHeadingBoldChange = (updatedText) => {
        this.setState({
            isSubHeadingBold: updatedText
        })
    }

    handleMainMessageTextChange = (updatedText) => {
        this.setState({
            mainMessageText : updatedText
        });
    }


    handleActionButtonTextChange = (updatedText) => {
        this.setState({
            actionButtonText : updatedText
        });
    }

    handleActionButtonColorChange = (updatedText) => {
        this.setState({
            actionButtonColor : updatedText
        });
    }

    handleHeaderBackGroundColorChange = (updatedText) => {
        this.setState({
            headerBackGroundColor : updatedText
        });
    }

    handleHeaderBorderColorChange = (updatedText) => {
        this.setState({
            headerBorderColor : updatedText
        });
    }

    handleHeaderTextColorChange = (updatedText) => {
        this.setState({
            headerTextColor : updatedText
        });
    }
    
    handleLinesColorChange = (updatedText) => {
        this.setState({
            linesColor : updatedText
        });
    }

    handleBarColorChange = (updatedText) => {
        this.setState({
            barColor : updatedText
        });
    }

    render(){
        return(
            <div className="row mt-3">
                    <div className="col-md-3 bg-white">
                        <CSOptions.Option1 
                        state = {this.state}
                        onHeaderBackGroundColorChange = {this.handleHeaderBackGroundColorChange}
                        onHeaderTextChange = {this.handleHeaderTextChange}
                        onMainMessageTextChange = {this.handleMainMessageTextChange}
                        onSubHeadingTextChange = {this.handleSubHeadingTextChange}
                        onActionButtonTextChange = {this.handleActionButtonTextChange}
                        onActionButtonColorChange = {this.handleActionButtonColorChange}
                        onHeaderTextColorChange = {this.handleHeaderTextColorChange}
                        onLinesColorChange = {this.handleLinesColorChange}
                        onIsSubHeadingBoldChange = {this.handleIsSubHeadingBoldChange}
                        onBarColorChange = {this.handleBarColorChange}
                        onHeaderBorderColorChange = {this.handleHeaderBorderColorChange}
                    />
                    </div>
                    <div className="col-md-9" id="option1">
                        <CSSStyles.Option1 />
                        <HTMLCode.Option1 
                        state = {this.state}
                        />
                    </div>
                </div>
        );
    }
}

export class Option2 extends Component{
    render(){
        return(
            <div>
            <h2 className="text-center" >Option 2</h2>
            <h3>EVERFI</h3>
            </div>
        );
    }
}

export class Option3 extends Component{
    constructor(props){
        super(props);
        this.state = {
            headerText: "Did You Know?",
            headerTextColor: "#fff", 
            subHeadingText: "We offer Associates tools to help manage insurance costs.", actionButtonText: "Learn More", 
            actionButtonColor: "#208aee",
            headerBackGroundColor: "#5bbaed", 
            isSubHeadingBold: "normal",
            mainMessageText: "Wherever you are in life, there is a plan to help you meet your needs.Visit us to learn more about the options available to you.",
            linesColor: "#208aee"
        };
    }

    handleHeaderTextChange = (updatedText) => {
        this.setState({
            headerText : updatedText
        });
    }

    handleSubHeadingTextChange = (updatedText) => {
        this.setState({
            subHeadingText : updatedText
        });
    }

    handleIsSubHeadingBoldChange = (updatedText) => {
        this.setState({
            isSubHeadingBold: updatedText
        })
    }

    handleMainMessageTextChange = (updatedText) => {
        this.setState({
            mainMessageText : updatedText
        });
    }


    handleActionButtonTextChange = (updatedText) => {
        this.setState({
            actionButtonText : updatedText
        });
    }

    handleActionButtonColorChange = (updatedText) => {
        this.setState({
            actionButtonColor : updatedText
        });
    }

    handleHeaderBackGroundColorChange = (updatedText) => {
        this.setState({
            headerBackGroundColor : updatedText
        });
    }

    handleHeaderTextColorChange = (updatedText) => {
        this.setState({
            headerTextColor : updatedText
        });
    }
    
    handleLinesColorChange = (updatedText) => {
        this.setState({
            linesColor : updatedText
        });
    }

    render(){
        return(
            <div className="row mt-3">
                    <div className="col-md-3 bg-white">
                        <CSOptions.Option3 
                        state = {this.state}
                        onHeaderBackGroundColorChange = {this.handleHeaderBackGroundColorChange}
                        onHeaderTextChange = {this.handleHeaderTextChange}
                        onMainMessageTextChange = {this.handleMainMessageTextChange}
                        onSubHeadingTextChange = {this.handleSubHeadingTextChange}
                        onActionButtonTextChange = {this.handleActionButtonTextChange}
                        onActionButtonColorChange = {this.handleActionButtonColorChange}
                        onHeaderTextColorChange = {this.handleHeaderTextColorChange}
                        onLinesColorChange = {this.handleLinesColorChange}
                        onIsSubHeadingBoldChange = {this.handleIsSubHeadingBoldChange}
                    />
                    </div>
                    <div className="col-md-9" id="option3">
                        <CSSStyles.Option3 />
                        <HTMLCode.Option3 
                        state = {this.state}
                        />
                    </div>
                </div>
        );
    }
}

export class Option4 extends Component{
    constructor(props){
        super(props);
        this.state = {
            headerText: "Did You Know?",
            headerTextColor: "#fff", 
            subHeadingText: "We offer Associates tools to help manage insurance costs.", actionButtonText: "Learn More", 
            actionButtonColor: "#208aee",
            headerBackGroundColor: "#5bbaed", 
            headerBorderColor: "#208aee", 
            barColor: "#5bbaed",
            isSubHeadingBold: "normal",
            mainMessageText: "Wherever you are in life, there is a plan to help you meet your needs.Visit us to learn more about the options available to you."
        };
    }

    handleHeaderTextChange = (updatedText) => {
        this.setState({
            headerText : updatedText
        });
    }

    handleSubHeadingTextChange = (updatedText) => {
        this.setState({
            subHeadingText : updatedText
        });
    }

    handleIsSubHeadingBoldChange = (updatedText) => {
        this.setState({
            isSubHeadingBold: updatedText
        })
    }

    handleMainMessageTextChange = (updatedText) => {
        this.setState({
            mainMessageText : updatedText
        });
    }


    handleActionButtonTextChange = (updatedText) => {
        this.setState({
            actionButtonText : updatedText
        });
    }

    handleActionButtonColorChange = (updatedText) => {
        this.setState({
            actionButtonColor : updatedText
        });
    }

    handleHeaderBackGroundColorChange = (updatedText) => {
        this.setState({
            headerBackGroundColor : updatedText
        });
    }

    handleHeaderBorderColorChange = (updatedText) => {
        this.setState({
            headerBorderColor : updatedText
        });
    }

    handleHeaderTextColorChange = (updatedText) => {
        this.setState({
            headerTextColor : updatedText
        });
    }
    
    handleBarColorChange = (updatedText) => {
        this.setState({
            barColor : updatedText
        });
    }

    render(){
        return(
                <div className="row mt-3">
                    <div className="col-md-3 bg-white">
                        <CSOptions.Option4 
                        state = {this.state}
                        onHeaderBackGroundColorChange = {this.handleHeaderBackGroundColorChange}
                        onHeaderTextChange = {this.handleHeaderTextChange}
                        onMainMessageTextChange = {this.handleMainMessageTextChange}
                        onSubHeadingTextChange = {this.handleSubHeadingTextChange}
                        onActionButtonTextChange = {this.handleActionButtonTextChange}
                        onActionButtonColorChange = {this.handleActionButtonColorChange}
                        onHeaderBorderColorChange = {this.handleHeaderBorderColorChange}
                        onHeaderTextColorChange = {this.handleHeaderTextColorChange}
                        onBarColorChange = {this.handleBarColorChange}
                        onIsSubHeadingBoldChange = {this.handleIsSubHeadingBoldChange}
                    />
                    </div>
                    <div className="col-md-9" id="option1">
                        <CSSStyles.Option4 />
                        <HTMLCode.Option4 
                        state = {this.state}
                        />
                    </div>
                </div>
        );
    }
}

export class Option5 extends Component{
    render(){
        return(
            <h2 className="text-center" >Option 5</h2>
        );
    }
}

export class Option6 extends Component{
    render(){
        return(
            <h2 className="text-center" >Option 6</h2>
        );
    }
}

export class Option7 extends Component{
    render(){
        return(
            <h2 className="text-center" >Option 7</h2>
        );
    }
}

