import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return( 
            <footer>
                <nav className="navbar fixed-bottom navbar-dark bg-secondary justify-content-center">
                    <p className="navbar-brand m-0 p-0" href="#">© 2018 - EverFi</p>
                </nav>
            </footer>
        );
    }
}

export default Footer;