import React, {Component} from "react";
import CSOptions from "./CSOptions.js";

export class Option1 extends Component{
    constructor(props){
        super(props);
        this.state = {headerText: "Heading", subHeading: "Sub-Heading", actionButton: "Learn More"};
        this.handleHeaderTextChange = this.handleHeaderTextChange.bind(this);
    }

    handleHeaderTextChange(updatedText){
        this.setState({
            headerText : updatedText
        });
    }

    render(){
        return(
            <div>
                <h2 className="text-center" >Option 1</h2>
                <div className="cs-modal-1">
                    <div className="header">
                        <p className="header-text">{this.state.headerText}</p>
                    </div>
                    <div className="col-wrap">
                        <div className="col-25">
                            <div className="bar">
                            </div>
                        </div>
                        <div className="col-75">
                            <p className="sub-heading">{this.state.subHeading}</p>
                            <a className="action-button" href="#" target="_blank">{this.state.actionButton}</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 code-box">
                        <pre><code>
                        &lt;div&gt;<br />
                            &lt;div className=&quot;cs-modal-1&quot;&gt;<br />
                                &lt;div className=&quot;header&quot;&gt;<br />
                                    &lt;p className=&quot;header-text&quot;&gt;{this.state.headerText}&lt;/p&gt;<br />
                                &lt;/div&gt;<br />
                                &lt;div className=&quot;col-wrap&quot;&gt;<br />
                                    &lt;div className=&quot;col-25&quot;&gt;<br />
                                        &lt;div className=&quot;bar&quot;&gt;<br />
                                        &lt;/div&gt;<br />
                                    &lt;/div&gt;<br />
                                    &lt;div className=&quot;col-75&quot;&gt;<br />
                                        &lt;p className=&quot;sub-heading&quot;&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&lt;/p&gt;<br />
                                        &lt;a className=&quot;action-button&quot; href=&quot;#&quot; target=&quot;_blank&quot;&gt;{this.state.actionButton}&lt;/a&gt;<br />
                                    &lt;/div&gt;<br />
                                &lt;/div&gt;<br />
                            &lt;/div&gt;<br />
                            &lt;div className=&quot;row&quot;&gt;<br />
                                &lt;div className=&quot;col-md-6 code-box&quot;&gt;<br />
                                    &lt;pre&gt;&amp;lt;&amp;gt;&lt;/pre&gt;<br />
                                &lt;/div&gt;<br />
                                &lt;div className=&quot;col-md-6&quot;&gt;<br />
                                &lt;/div&gt;<br />
                            &lt;/div&gt;<br />
                        &lt;/div&gt;<br />
            </code>
                        </pre>
                    </div>
                    <div className="col-md-6">
                    <CSOptions headerText = {this.state.headerText} onHeaderTextChange = {this.handleHeaderTextChange}/>
                    </div>
                </div>
            </div>
        );
    }
}

export class Option2 extends Component{
    render(){
        return(
            <h2 className="text-center" >Option 2</h2>
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

