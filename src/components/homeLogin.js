import React, { Component } from 'react';
import '../assets/style/homelogin.less';
import GoogleButton from './GoogleButtton';

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
                            <GoogleButton/>
                            <p className="link"> <a href="">Log in with email and password</a></p>
                            <p className="link"><a href="">Log in with SSO</a></p>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default HomeLogin;