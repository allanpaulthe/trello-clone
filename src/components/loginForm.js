import React, { Component } from 'react';
import '../assets/style/loginform.less';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <form action="">
                <div className="loginForm">
                    <p>Email <span>(or username)</span> </p>
                    <input type="text" placeholder="e.g., e.hughes@downton.org.uk"/>
                    <p>Password</p>
                    <input type="text" placeholder="e.g., ••••••••••••"/>
                    <input type="submit" value="Log In" className="button green-button"/>
                </div>
            </form>
        );
    }
}

export default LoginForm;