import React, {Component} from "react";
import * as CSOptions from "./CSOptions.js";
import * as HTMLCode from "./HTMLCode.js"
import * as CSSStyles from "./CSSStyles.js"

export class Option1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            primaryColor: "",
            secondaryColor: "",
            font: "",
            headerText: "Did You Know?",
            headerTextColor: "#fff", 
            subHeadingText: "We offer Associates tools to help manage insurance costs.", actionButtonText: "Learn More", 
            actionButtonColor: "#10AEA6",
            headerBackGroundColor: "#286090",
            headerBorderColor: "#366e9f",  
            isSubHeadingBold: "normal",
            mainMessageText: "Wherever you are in life, there is a plan to help you meet your needs.Visit us to learn more about the options available to you.",
            barColor: "#286090",
            linesColor: "#208aee",
            buttonHref: "https://everfi.com"
        };
    }

    handlePriamryColorChange = (updatedText) => {
        this.setState({
            primaryColor : updatedText,
            headerBackGroundColor : updatedText,
            barColor: updatedText
        });
    }

    handleSecondaryColorChange = (updatedText) => {
        this.setState({
            secondaryColor : updatedText,
            headerBorderColor : updatedText,
            actionButtonColor: updatedText,
            linesColor: updatedText
        });
    }

    handleFontChange = (updatedText) => {
        this.setState({
            font: updatedText
        })
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

    handleButtonHrefChange = (updatedText) => {
        this.setState({
            buttonHref : updatedText
        });
    }

    render(){
        return(
            <div className="row mt-3">
                    <div className="col-md-3 aside-options-list">
                        <CSOptions.Option1 
                        state = {this.state}
                        onPrimaryColorChange = {this.handlePriamryColorChange}
                        onSecondaryColorChange = {this.handleSecondaryColorChange}
                        onFontChange = {this.handleFontChange}
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
                        onButtonHrefChange = {this.handleButtonHrefChange}
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
    constructor(props){
        super(props);
        this.state = {
            primaryColor: "",
            secondaryColor: "",
            font: "",
            headerText: "Did You Know?",
            headerTextColor: "#fff", 
            subHeadingText: "We offer Associates tools to help manage insurance costs.", actionButtonText: "Learn More", 
            actionButtonColor: "#208aee",
            headerBackGroundColor: "#5bbaed", 
            isSubHeadingBold: "normal",
            mainMessageText: "Wherever you are in life, there is a plan to help you meet your needs.Visit us to learn more about the options available to you.",
            linesColor: "#208aee",
            buttonHref: "https://everfi.com"
        };
    }

    handlePriamryColorChange = (updatedText) => {
        this.setState({
            primaryColor : updatedText,
            headerBackGroundColor : updatedText,
        });
    }

    handleSecondaryColorChange = (updatedText) => {
        this.setState({
            secondaryColor : updatedText,
            actionButtonColor: updatedText,
            linesColor: updatedText
        });
    }

    handleFontChange = (updatedText) => {
        this.setState({
            font: updatedText
        })
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
    handleButtonHrefChange = (updatedText) => {
        this.setState({
            buttonHref : updatedText
        });
    }



    render(){
        return(
            <div className="row mt-3">
                    <div className="col-md-3 aside-options-list">
                        <CSOptions.Option2
                        state = {this.state}
                        onPrimaryColorChange = {this.handlePriamryColorChange}
                        onSecondaryColorChange = {this.handleSecondaryColorChange}
                        onFontChange = {this.handleFontChange}
                        onHeaderBackGroundColorChange = {this.handleHeaderBackGroundColorChange}
                        onHeaderTextChange = {this.handleHeaderTextChange}
                        onMainMessageTextChange = {this.handleMainMessageTextChange}
                        onSubHeadingTextChange = {this.handleSubHeadingTextChange}
                        onActionButtonTextChange = {this.handleActionButtonTextChange}
                        onActionButtonColorChange = {this.handleActionButtonColorChange}
                        onHeaderTextColorChange = {this.handleHeaderTextColorChange}
                        onLinesColorChange = {this.handleLinesColorChange}
                        onIsSubHeadingBoldChange = {this.handleIsSubHeadingBoldChange}
                        onButtonHrefChange = {this.handleButtonHrefChange}
                    />
                    </div>
                    <div className="col-md-9" id="option2">
                        <CSSStyles.Option3 />
                        <HTMLCode.Option2 
                        state = {this.state}
                        />
                    </div>
                </div>
        );
    }
}

export class Option3 extends Component{
    constructor(props){
        super(props);
        this.state = {
            primaryColor: "",
            secondaryColor: "",
            font: "",
            headerText: "Did You Know?",
            headerTextColor: "#fff", 
            subHeadingText: "We offer Associates tools to help manage insurance costs.", actionButtonText: "Learn More", 
            actionButtonColor: "#208aee",
            headerBackGroundColor: "#5bbaed", 
            isSubHeadingBold: "normal",
            mainMessageText: "Wherever you are in life, there is a plan to help you meet your needs.Visit us to learn more about the options available to you.",
            linesColor: "#208aee",
            buttonHref: "https://everfi.com"
        };
    }

    handlePriamryColorChange = (updatedText) => {
        this.setState({
            primaryColor : updatedText,
            headerBackGroundColor : updatedText,
        });
    }

    handleSecondaryColorChange = (updatedText) => {
        this.setState({
            secondaryColor : updatedText,
            actionButtonColor: updatedText,
            linesColor: updatedText
        });
    }

    handleFontChange = (updatedText) => {
        this.setState({
            font: updatedText
        })
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
    handleButtonHrefChange = (updatedText) => {
        this.setState({
            buttonHref : updatedText
        });
    }



    render(){
        return(
            <div className="row mt-3">
                    <div className="col-md-3 aside-options-list">
                        <CSOptions.Option3 
                        state = {this.state}
                        onPrimaryColorChange = {this.handlePriamryColorChange}
                        onSecondaryColorChange = {this.handleSecondaryColorChange}
                        onFontChange = {this.handleFontChange}
                        onHeaderBackGroundColorChange = {this.handleHeaderBackGroundColorChange}
                        onHeaderTextChange = {this.handleHeaderTextChange}
                        onMainMessageTextChange = {this.handleMainMessageTextChange}
                        onSubHeadingTextChange = {this.handleSubHeadingTextChange}
                        onActionButtonTextChange = {this.handleActionButtonTextChange}
                        onActionButtonColorChange = {this.handleActionButtonColorChange}
                        onHeaderTextColorChange = {this.handleHeaderTextColorChange}
                        onLinesColorChange = {this.handleLinesColorChange}
                        onIsSubHeadingBoldChange = {this.handleIsSubHeadingBoldChange}
                        onButtonHrefChange = {this.handleButtonHrefChange}
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
            primaryColor: "",
            secondaryColor: "",
            font: "",
            headerText: "Did You Know?",
            headerTextColor: "#fff", 
            subHeadingText: "We offer Associates tools to help manage insurance costs.", actionButtonText: "Learn More", 
            actionButtonColor: "#208aee",
            headerBackGroundColor: "#5bbaed", 
            headerBorderColor: "#51aaa3", 
            barColor: "#5bbaed",
            isSubHeadingBold: "normal",
            mainMessageText: "Wherever you are in life, there is a plan to help you meet your needs.Visit us to learn more about the options available to you.",
            buttonHref: "https://everfi.com"
        };
    }

    handlePriamryColorChange = (updatedText) => {
        this.setState({
            primaryColor : updatedText,
            headerBackGroundColor : updatedText,
            barColor: updatedText
        });
    }

    handleSecondaryColorChange = (updatedText) => {
        this.setState({
            secondaryColor : updatedText,
            actionButtonColor: updatedText,
            headerBorderColor: updatedText
        });
    }

    handleFontChange = (updatedText) => {
        this.setState({
            font: updatedText
        })
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

    handleButtonHrefChange = (updatedText) => {
        this.setState({
            buttonHref : updatedText
        });
    }

    render(){
        return(
                <div className="row mt-3">
                    <div className="col-md-3 aside-options-list">
                        <CSOptions.Option4 
                        state = {this.state}
                        onPrimaryColorChange = {this.handlePriamryColorChange}
                        onSecondaryColorChange = {this.handleSecondaryColorChange}
                        onFontChange = {this.handleFontChange}
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
                        onButtonHrefChange = {this.handleButtonHrefChange}
                    />
                    </div>
                    <div className="col-md-9" id="option4">
                        <CSSStyles.Option4 />
                        <HTMLCode.Option4 
                        state = {this.state}
                        />
                    </div>
                </div>
        );
    }
}


export class Option6 extends Component{
    constructor(props){
        super(props);
        this.state = {
            primaryColor: "",
            secondaryColor: "",
            font: "",
            headerText: "Did You Know?",
            leftColumnBackGroundColor: "#fff",
            rightColumnBackGroundColor: "#208aee",
            headerTextColor: "#000", 
            actionButtonText: "Learn More", 
            actionButtonColor: "#5bbaed",
            isSubHeadingBold: "normal",
            mainMessageText: "Wherever you are in life, there is a plan to help you meet your needs.Visit us to learn more about the options available to you.",
            mainMessageTextColor: "#fff",
            buttonHref: "https://everfi.com"
        };
    }

    handlePriamryColorChange = (updatedText) => {
        this.setState({
            primaryColor : updatedText,
            rightColumnBackGroundColor : updatedText,
        });
    }

    handleSecondaryColorChange = (updatedText) => {
        this.setState({
            secondaryColor : updatedText,
            actionButtonColor: updatedText,
        });
    }

    handleFontChange = (updatedText) => {
        this.setState({
            font: updatedText
        })
    }

    handleHeaderTextChange = (updatedText) => {
        this.setState({
            headerText : updatedText
        });
    }

    handleMainMessageTextChange = (updatedText) => {
        this.setState({
            mainMessageText : updatedText
        });
    }

    handleMainMessageTextColorChange = (updatedText) => {
        this.setState({
            mainMessageTextColor : updatedText
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


    handleHeaderTextColorChange = (updatedText) => {
        this.setState({
            headerTextColor : updatedText
        });
    }

    handleButtonHrefChange = (updatedText) => {
        this.setState({
            buttonHref : updatedText
        });
    }

    handleButtonHrefChange = (updatedText) => {
        this.setState({
            buttonHref : updatedText
        });
    }

    handleLeftColumnBackGroundColorChange = (updatedText) => {
        this.setState({
            leftColumnBackGroundColor : updatedText
        });
    }

    handleRightColumnBackGroundColorChange = (updatedText) => {
        this.setState({
            rightColumnBackGroundColor : updatedText
        });
    }


    render(){
        return(
                <div className="row mt-3">
                    <div className="col-md-3 aside-options-list">
                        <CSOptions.Option6 
                        state = {this.state}
                        onPrimaryColorChange = {this.handlePriamryColorChange}
                        onSecondaryColorChange = {this.handleSecondaryColorChange}
                        onFontChange = {this.handleFontChange}
                        onHeaderBackGroundColorChange = {this.handleHeaderBackGroundColorChange}
                        onLeftColumnBackGroundColorChange = {this.handleLeftColumnBackGroundColorChange}
                        onRightColumnBackGroundColorChange={this.handleRightColumnBackGroundColorChange}
                        onHeaderTextChange = {this.handleHeaderTextChange}
                        onMainMessageTextChange = {this.handleMainMessageTextChange}
                        onMainMessageTextColorChange = {this.handleMainMessageTextColorChange}
                        onActionButtonTextChange = {this.handleActionButtonTextChange}
                        onActionButtonColorChange = {this.handleActionButtonColorChange}
                        onHeaderTextColorChange = {this.handleHeaderTextColorChange}
                        onBarColorChange = {this.handleBarColorChange}
                        onButtonHrefChange = {this.handleButtonHrefChange}
                    />
                    </div>
                    <div className="col-md-9" id="option6">
                        <CSSStyles.Option6 />
                        <HTMLCode.Option6 
                        state = {this.state}
                        />
                    </div>
                </div>
        );
    }
}


export class Option7 extends Component{
    constructor(props){
        super(props);
        this.state = {
            primaryColor: "",
            secondaryColor: "",
            font: "",
            headerText: "Did You Know?",
            leftColumnBackGroundColor: "#fff",
            rightColumnBackGroundColor: "#208aee",
            headerTextColor: "#000", 
            actionButtonText1: "Learn More", 
            actionButtonColor1: "#5bbaed",
            actionButtonText2: "Learn More", 
            actionButtonColor2: "#5bbaed",
            isSubHeadingBold: "normal",
            mainMessageText1: "Wherever you are in life, there is a plan to help you meet your needs.Visit us to learn more about the options available to you.",
            mainMessageTextColor1: "#fff",
            mainMessageText2: "Wherever you are in life, there is a plan to help you meet your needs.Visit us to learn more about the options available to you.",
            mainMessageTextColor2: "#fff",
            buttonHref1: "https://everfi.com",
            buttonHref2: "https://everfi.com"
        };
    }

    handlePriamryColorChange = (updatedText) => {
        this.setState({
            primaryColor : updatedText,
            rightColumnBackGroundColor : updatedText,
        });
    }

    handleSecondaryColorChange = (updatedText) => {
        this.setState({
            secondaryColor : updatedText,
            actionButtonColor1: updatedText,
            actionButtonColor2: updatedText
        });
    }

    handleFontChange = (updatedText) => {
        this.setState({
            font: updatedText
        })
    }

    handleHeaderTextChange = (updatedText) => {
        this.setState({
            headerText : updatedText
        });
    }

    handleMainMessageTextChange1 = (updatedText) => {
        this.setState({
            mainMessageText1 : updatedText
        });
    }

    handleMainMessageTextColorChange1 = (updatedText) => {
        this.setState({
            mainMessageTextColor1 : updatedText
        });
    }

    handleMainMessageTextChange2 = (updatedText) => {
        this.setState({
            mainMessageText2 : updatedText
        });
    }

    handleMainMessageTextColorChange2 = (updatedText) => {
        this.setState({
            mainMessageTextColor2 : updatedText
        });
    }

    handleActionButtonTextChange1 = (updatedText) => {
        this.setState({
            actionButtonText1 : updatedText
        });
    }

    handleActionButtonColorChange1 = (updatedText) => {
        this.setState({
            actionButtonColor1 : updatedText
        });
    }

    handleActionButtonTextChange2 = (updatedText) => {
        this.setState({
            actionButtonText2 : updatedText
        });
    }

    handleActionButtonColorChange2 = (updatedText) => {
        this.setState({
            actionButtonColor2 : updatedText
        });
    }

    handleHeaderTextColorChange = (updatedText) => {
        this.setState({
            headerTextColor : updatedText
        });
    }

    handleButtonHrefChange1 = (updatedText) => {
        this.setState({
            buttonHref1 : updatedText
        });
    }

    handleButtonHrefChange2 = (updatedText) => {
        this.setState({
            buttonHref2 : updatedText
        });
    }
    

    handleLeftColumnBackGroundColorChange = (updatedText) => {
        this.setState({
            leftColumnBackGroundColor : updatedText
        });
    }

    handleRightColumnBackGroundColorChange = (updatedText) => {
        this.setState({
            rightColumnBackGroundColor : updatedText
        });
    }


    render(){
        return(
                <div className="row mt-3">
                    <div className="col-md-3 aside-options-list">
                        <CSOptions.Option7 
                        state = {this.state}
                        onPrimaryColorChange = {this.handlePriamryColorChange}
                        onSecondaryColorChange = {this.handleSecondaryColorChange}
                        onFontChange = {this.handleFontChange}
                        onHeaderBackGroundColorChange = {this.handleHeaderBackGroundColorChange}
                        onLeftColumnBackGroundColorChange = {this.handleLeftColumnBackGroundColorChange}
                        onRightColumnBackGroundColorChange={this.handleRightColumnBackGroundColorChange}
                        onHeaderTextChange = {this.handleHeaderTextChange}
                        onMainMessageTextChange1 = {this.handleMainMessageTextChange1}
                        onMainMessageTextColorChange1 = {this.handleMainMessageTextColorChange1}
                        onMainMessageTextChange2 = {this.handleMainMessageTextChange2}
                        onMainMessageTextColorChange2 = {this.handleMainMessageTextColorChange2}
                        onActionButtonTextChange1 = {this.handleActionButtonTextChange1}
                        onActionButtonColorChange1 = {this.handleActionButtonColorChange1}
                        onActionButtonTextChange2 = {this.handleActionButtonTextChange2}
                        onActionButtonColorChange2 = {this.handleActionButtonColorChange2}
                        onHeaderTextColorChange = {this.handleHeaderTextColorChange}
                        onBarColorChange = {this.handleBarColorChange}
                        onButtonHrefChange1 = {this.handleButtonHrefChange1}
                        onButtonHrefChange2 = {this.handleButtonHrefChange2}
                    />
                    </div>
                    <div className="col-md-9" id="option7">
                        <CSSStyles.Option7 />
                        <HTMLCode.Option7 
                        state = {this.state}
                        />
                    </div>
                </div>
        );
    }
}

export class Option8 extends Component{
    constructor(props){
        super(props);
        this.state = {
            primaryColor: "",
            secondaryColor: "",
            font: "",
            headerText: "Did You Know?",
            headerTextColor: "#fff", 
            subHeadingText: "We offer Associates tools to help manage insurance costs.", actionButtonText: "Learn More", 
            actionButtonColor: "#208aee",
            bodyBackGroundColor: "#5bbaed", 
            headerBorderColor: "#51aaa3", 
            barColor: "#5bbaed",
            isSubHeadingBold: "normal",
            mainMessageText: "Wherever you are in life, there is a plan to help you meet your needs.Visit us to learn more about the options available to you.",
            mainMessageTextColor: "#fff",
            buttonHref: "https://everfi.com"
        };
    }

    handlePriamryColorChange = (updatedText) => {
        this.setState({
            bodyBackGroundColor : updatedText,
        });
    }

    handleSecondaryColorChange = (updatedText) => {
        this.setState({
            secondaryColor : updatedText,
            actionButtonColor: updatedText,
            headerBorderColor: updatedText
        });
    }

    handleFontChange = (updatedText) => {
        this.setState({
            font: updatedText
        })
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
    
    handlebodyBackGroundColorChange = (updatedText) => {
        this.setState({
            headerTextColor : updatedText
        });
    }

    handleButtonHrefChange = (updatedText) => {
        this.setState({
            buttonHref : updatedText
        });
    }

    handleMainMessageTextColorChange = (updatedText) => {
        this.setState({
            mainMessageTextColor : updatedText
        });
    }

    render(){
        return(
                <div className="row mt-3">
                    <div className="col-md-3 aside-options-list">
                        <CSOptions.Option8 
                        state = {this.state}
                        onPrimaryColorChange = {this.handlePriamryColorChange}
                        onSecondaryColorChange = {this.handleSecondaryColorChange}
                        onFontChange = {this.handleFontChange}
                        onHeaderTextChange = {this.handleHeaderTextChange}
                        onBodyBackGroundColorChange={this.handlebodyBackGroundColorChange}
                        onMainMessageTextChange = {this.handleMainMessageTextChange}
                        onMainMessageTextColorChange = {this.handleMainMessageTextColorChange}
                        onSubHeadingTextChange = {this.handleSubHeadingTextChange}
                        onActionButtonTextChange = {this.handleActionButtonTextChange}
                        onActionButtonColorChange = {this.handleActionButtonColorChange}
                        onHeaderBorderColorChange = {this.handleHeaderBorderColorChange}
                        onHeaderTextColorChange = {this.handleHeaderTextColorChange}
                        
                        onIsSubHeadingBoldChange = {this.handleIsSubHeadingBoldChange}
                        onButtonHrefChange = {this.handleButtonHrefChange}
                    />
                    </div>
                    <div className="col-md-9" id="option8">
                        <CSSStyles.Option8 />
                        <HTMLCode.Option8 
                        state = {this.state}
                        />
                    </div>
                </div>
        );
    }
}