import React, { Component } from 'react';
import '../../assets/style/Home/homelogin.less';
import GoogleButton from './GoogleButtton';
import { Link } from 'react-router-dom';

class HomeLogin extends Component {
    render() {
        return (
                <section className="homeLogin">
                    <div className="section-wrapper">
                        <div className="text-center">
                            <h1>Welcome back to Trello!</h1>
                        </div>
                        <div className="loginform">
                            <h1>Log in to Trello</h1>
                            <span>or <a href="">create an account</a></span>
                            <div className="googleLogin">
                                <GoogleButton />
                                <Link to="/login/email"><p className="link"> <a href="">Log in with email and password</a></p></Link>
                                <p className="link"><a href="">Log in with SSO</a></p>
                            </div>

                        </div>
                    </div>
                </section>
        );
    }
}

export default HomeLogin;