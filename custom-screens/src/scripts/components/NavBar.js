import React, { Component } from 'react';
import logo from "../../images/everfi-logo.png";

class NavBar extends Component{
    render(){
        return( 
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="" />
                </a>
            </nav>
        );
    }
}

export default NavBar;