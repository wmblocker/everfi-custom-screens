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
            subHeadingText: "We offer Associates tools to help manage insurace costs.", actionButtonText: "Learn More", 
            actionButtonColor: "#208aee",
            headerBackGroundColor: "#5bbaed", 
            headerBorderColor: "#208aee", 
            barColor: "#5bbaed",
            isSubHeadingBold: "normal",
            mainMessageText: "Wherever you are in life, there is a plan to help you meet your needs.Visit us to learn more about the options available to you."
        };
        this.handleHeaderTextChange = this.handleHeaderTextChange.bind(this);
        this.handleMainMessageTextChange = this.handleMainMessageTextChange.bind(this);
        this.handleSubHeadingTextChange = this.handleSubHeadingTextChange.bind(this);
        this.handleIsSubHeadingBoldChange = this.handleIsSubHeadingBoldChange.bind(this);
        this.handleActionButtonTextChange = this.handleActionButtonTextChange.bind(this);
        this.handleActionButtonColorChange = this.handleActionButtonColorChange.bind(this);
        this.handleHeaderBackGroundColorChange = this.handleHeaderBackGroundColorChange.bind(this);
        this.handleHeaderBorderColorChange = this.handleHeaderBorderColorChange.bind(this);
        this.handleHeaderTextColorChange = this.handleHeaderTextColorChange.bind(this);
        this.handleBarColorChange = this.handleBarColorChange.bind(this);

    }

    handleHeaderTextChange(updatedText){
        this.setState({
            headerText : updatedText
        });
    }

    handleSubHeadingTextChange(updatedText){
        this.setState({
            subHeadingText : updatedText
        });
    }

    handleIsSubHeadingBoldChange(updatedText){
        this.setState({
            isSubHeadingBold: updatedText
        })
    }

    handleMainMessageTextChange(updatedText){
        this.setState({
            mainMessageText : updatedText
        });
    }


    handleActionButtonTextChange(updatedText){
        this.setState({
            actionButtonText : updatedText
        });
    }

    handleActionButtonColorChange(updatedText){
        this.setState({
            actionButtonColor : updatedText
        });
    }

    handleHeaderBackGroundColorChange(updatedText){
        this.setState({
            headerBackGroundColor : updatedText
        });
    }

    handleHeaderBorderColorChange(updatedText){
        this.setState({
            headerBorderColor : updatedText
        });
    }

    handleHeaderTextColorChange(updatedText){
        this.setState({
            headerTextColor : updatedText
        });
    }
    
    handleBarColorChange(updatedText){
        this.setState({
            barColor : updatedText
        });
    }

    render(){
        return(
            <div>
                <CSSStyles.Option1 />
                <div className="row mt-3">
                    <div className="col-md-3 bg-light">
                        <CSOptions.Option1 
                        headerText = {this.state.headerText}
                        headerTextColor = {this.state.headerTextColor}
                        headerBorderColor = {this.state.headerBorderColor}
                        subHeadingText = {this.state.subHeadingText}
                        actionButtonText = {this.state.actionButtonText}
                        actionButtonColor = {this.state.actionButtonColor}
                        headerBackGroundColor = {this.state.headerBackGroundColor}
                        mainMessageText = {this.state.mainMessageText}
                        barColor = {this.state.barColor}
                        isSubHeadingBold = {this.state.isSubHeadingBold}
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
                    <div className="col-md-9">
                        <HTMLCode.Option1 
                        headerText = {this.state.headerText}
                        headerBackGroundColor = {this.state.headerBackGroundColor}
                        headerBorderColor = {this.state.headerBorderColor}
                        headerTextColor = {this.state.headerTextColor}
                        mainMessageText = {this.state.mainMessageText}
                        subHeadingText = {this.state.subHeadingText}
                        actionButtonText = {this.state.actionButtonText}
                        actionButtonColor = {this.state.actionButtonColor}
                        barColor = {this.state.barColor}
                        isSubHeadingBold = {this.state.isSubHeadingBold}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 code-box">
                        <pre><code>
                        &lt;div&gt;<br />
                        &lt;div className=&quot;option-1&quot;&gt;<br />
                                &lt;div className=&quot;header&quot;&gt;<br />
                                    &lt;p className=&quot;header-text&quot;&gt;{this.state.headerText}&lt;/p&gt;<br />
                                &lt;/div&gt;<br />
                                &lt;div className=&quot;col-wrap&quot;&gt;<br />
                                    &lt;div className=&quot;col-25&quot;&gt;<br />
                                        &lt;div className=&quot;bar&quot;&gt;<br />
                                        &lt;/div&gt;<br />
                                    &lt;/div&gt;<br />
                                    &lt;div className=&quot;col-75&quot;&gt;<br />
                                        &lt;p className=&quot;sub-heading&quot;&gt;{this.state.subHeadingText}&lt;/p&gt;<br />
                                        &lt;a className=&quot;action-button&quot; href=&quot;#&quot; target=&quot;_blank&quot;&gt;{this.state.actionButtonText}&lt;/a&gt;<br />
                                    &lt;/div&gt;<br />
                                &lt;/div&gt;<br />
                            &lt;/div&gt;<br />
                        &lt;/div&gt;<br />
            </code>
                        </pre>
                    </div>
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
    render(){
        return(
            <h2 className="text-center" >Option 3</h2>
        );
    }
}

export class Option4 extends Component{
    render(){
        return(
            <h2 className="text-center" >Option 4</h2>
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

