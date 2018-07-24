import React, { Component } from 'react';
import '../../assets/style/Home/navbar.less';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="left">
                    <a className="logo" href="">
                        <img className="logo-img" src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/trello-header-logos/af7af6ed478d3460709d715d9b3f74a4/trello-logo-white.svg" alt="Logo"/>
                    </a>
                </div>
                <div className="right">
                    <Link to="/login"><a className="right-button" href="">Log In</a></Link>
                    <a className="right-button green" href="">Sign Up</a>
                </div>
            </div>
        );
    }
}

export default NavBar;