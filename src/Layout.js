import React, { Component } from 'react';
import Footer from './Footer.js/index';
import Navbar from './Navbar/index';
import ScrollToTop from './scrolltoTop/index';
class Layout extends Component {
    render(){
     
        return(
            <div>
            <ScrollToTop/>
                <Navbar/>
                 {this.props.children}
                <Footer/>
            </div>
        )
    }
}
export default Layout;