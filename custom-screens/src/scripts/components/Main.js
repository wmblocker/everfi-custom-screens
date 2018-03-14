import React, { Component } from 'react';
import {Router, Route, Link, Switch} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import CSOptions from "./CSOptions.js";
import * as Options from "./Options.js";

class Main extends Component{
    render(){
        return(
            <Switch>
            <div className="row">
                <main className="col-md-12">
                    <div className="dropdown show">
                        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Choose a screen option
                        </a>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <Link className="dropdown-item" to="/everfi-custom-screens/option1">Option 1</Link>
                            <Link className="dropdown-item" to="/everfi-custom-screens/option2">Option 2</Link>
                            <Link className="dropdown-item"  to="/everfi-custom-screens/option3">Option 3</Link>
                            <Link className="dropdown-item"  to="/everfi-custom-screens/option4">Option 4</Link>
                            <Link className="dropdown-item"  to="/everfi-custom-screens/option5">Option 5</Link>
                            <Link className="dropdown-item"  to="/everfi-custom-screens/option6">Option 6</Link>
                            <Link className="dropdown-item"  to="/everfi-custom-screens/option7">Option 7</Link>
                            <Link className="dropdown-item"  to="/everfi-custom-screens/option8">Option 8</Link>
                        </div>
                    </div>
                    <Route path="/everfi-custom-screens/option1" component={Options.Option1} />
                    <Route path="/everfi-custom-screens/option2" component={Options.Option2} />
                    <Route path="/everfi-custom-screens/option3" component={Options.Option3} />
                    <Route path="/everfi-custom-screens/option4" component={Options.Option4} />
                    <Route path="/everfi-custom-screens/option5" component={Options.Option5} />
                    <Route path="/everfi-custom-screens/option6" component={Options.Option6} />
                    <Route path="/everfi-custom-screens/option7" component={Options.Option7} />
                    <Route path="/everfi-custom-screens/option8" component={Options.Option8} />
                </main>
            </div>
            </Switch>
        );
    }
}

export default Main;