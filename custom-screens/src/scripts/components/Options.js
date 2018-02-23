import React, {Component} from "react";
import * as CSOptions from "./CSOptions.js";
import * as HTMLCode from "./HTMLCode.js"

export class Option1 extends Component{
    constructor(props){
        super(props);
        this.state = {headerText: "Heading", subHeadingText: "Sub-Heading", actionButtonText: "Learn More", headerBackGround: "#f8f9fa", headerBorder: "#ee5030", barColor: "#f8f9fa"};
        this.handleHeaderTextChange = this.handleHeaderTextChange.bind(this);
        this.handleSubHeadingTextChange = this.handleSubHeadingTextChange.bind(this);
        this.handleActionButtonTextChange = this.handleActionButtonTextChange.bind(this);
        this.handleHeaderBackGroundChange = this.handleHeaderBackGroundChange.bind(this);
        this.handleHeaderBorderChange = this.handleHeaderBorderChange.bind(this);
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

    handleActionButtonTextChange(updatedText){
        this.setState({
            actionButtonText : updatedText
        });
    }

    handleHeaderBackGroundChange(updatedText){
        this.setState({
            headerBackGround : updatedText
        });
    }

    handleHeaderBorderChange(updatedText){
        this.setState({
            headerBorder : updatedText
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
                <div className="row mt-3">
                    <div className="col-md-3 bg-light">
                        <CSOptions.Option1 
                        headerText = {this.state.headerText}
                        headerBorder = {this.state.headerBorder}
                        subHeadingText = {this.state.subHeadingText}
                        actionButtonText = {this.state.actionButtonText}
                        headerBackGround = {this.state.headerBackGround}
                        barColor = {this.state.bar}
                        onHeaderBackGroundChange = {this.handleHeaderBackGroundChange}
                        onHeaderTextChange = {this.handleHeaderTextChange}
                        onSubHeadingTextChange = {this.handleSubHeadingTextChange}
                        onActionButtonTextChange = {this.handleActionButtonTextChange}
                        onHeaderBorderChange = {this.handleHeaderBorderChange}
                        onBarColorChange = {this.handleBarColorChange}
                    />
                    </div>
                    <div className="col-md-9">
                        <HTMLCode.Option1 
                        headerText = {this.state.headerText}
                        headerBackGround = {this.state.headerBackGround}
                        headerBorder = {this.state.headerBorder}
                        subHeadingText = {this.state.subHeadingText}
                        actionButtonText = {this.state.actionButtonText}
                        barColor = {this.state.bar}
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

