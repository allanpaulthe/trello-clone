import React, { Component } from 'react';
import Footer from '../components/footer';
import GoogleButtton from '../components/GoogleButtton';
import '../assets/style/login.less';
import LoginForm from '../components/loginForm';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <section className="login-section">
                    <div className="login-wrapper">
                        <div>
                            <h1>Log in to Trello</h1>
                            <span>or <a href="/signup" id="signup">create an account</a></span>
                            <div>
                                <LoginForm/>
                                <GoogleButtton/>
                                <p> <a href="" tabindex="2" >Log in with email and password</a> </p>
                                <p> <a href="" tabindex="3">Log in with SSO</a> </p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default Login;