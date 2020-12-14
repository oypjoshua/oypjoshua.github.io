import React, { Component } from 'react';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#">Best dota player!</a> 
        </nav>
        );
    }
}
 
export default NavBar;