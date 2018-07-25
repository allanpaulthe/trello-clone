import React, { Component } from 'react';
import Footer from '../Home/footer';
import GoogleButtton from '../Home/GoogleButtton';
import '../../assets/style/Login/login.less';
import LoginForm from './loginForm';
import { BrowserRouter as Router } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailAndPass: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            emailAndPass: true
        });
    }
    render() {
        return (
            <Router>
                <div>
                    <section className="login-section">
                        <div className="login-wrapper">
                            <div>
                                <h1>Log in to Trello</h1>
                                <span>or <a>create an account</a></span>
                                <div>
                                    {this.state.emailAndPass &&
                                        <LoginForm />
                                    }
                                    <GoogleButtton />
                                    {!this.state.emailAndPass &&
                                        <p onClick={this.handleClick}> <a>Log in with email and password</a> </p>
                                    }
                                    <p> <a href="" tabindex="3">Log in with SSO</a> </p>
                                    {this.state.emailAndPass &&
                                        <p> <a>Forgot your password?</a> </p>
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default Login;