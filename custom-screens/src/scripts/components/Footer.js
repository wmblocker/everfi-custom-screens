import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return( 
            <footer>
                <nav className="navbar fixed-bottom navbar-light bg-light justify-content-center">
                    <p className="navbar-brand m-0 p-0" href="#">© 2018 - William Blocker | EverFi</p>
                </nav>
            </footer>
        );
    }
}

export default Footer;