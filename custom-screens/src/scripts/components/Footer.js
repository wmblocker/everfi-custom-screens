import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return( 
            <footer>
                <nav className="navbar fixed-bottom py-4" style={{backgroundColor: "#393939"}}>
                	<i className="fa fa-question-circle"></i>
                </nav>
            </footer>
        );
    }
}

export default Footer;