import React, { Component } from 'react';
import logo from "../../images/everfi-white-transparent.png";

class NavBar extends Component{
    render(){
        return( 
            <nav className="navbar navbar-light" style={{marginLeft: "-15px", marginRight:"-15px", backgroundColor: "#464f4e"}}>
                <a className="navbar-brand" href="#">
                    <img src="" alt="" style={{height: "50px", maxHeight: "50px"}}/>
                </a>
            </nav>
        );
    }
}

export default NavBar;