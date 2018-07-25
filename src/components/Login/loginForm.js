import React, { Component } from 'react';
import '../../assets/style/Login/loginform.less';
import { withRouter } from 'react-router-dom';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            wrong: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        let email = this.state.email.toUpperCase();
        let pass = this.state.password.toUpperCase();
        if (email === 'ALAN@GMAIL.COM' && pass === 'ALAN') {
            window.location.pathname = '/user/boards';
        }
        else {
            this.setState({
                wrong: true
            });
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value,
        });
    }

    render() {
        return (
            <form action="">
                <div className="loginForm">
                    {this.state.wrong &&
                        <p className="error">Wrong Credentials!!!..</p>
                    }
                    <p>Email <span>(or username)</span> </p>
                    <input type="text" placeholder="e.g., e.hughes@downton.org.uk"
                        id="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                    <p>Password</p>
                    <input type="password" placeholder="e.g., ••••••••••••"
                        id="password"
                        value={this.state.passWord}
                        onChange={this.handleChange}
                        required
                    />
                    <input type="submit" value="Log In" className="button green-button"
                        onClick={this.handleSubmit}
                    />
                </div>
            </form>
        );
    }
}

export default withRouter(LoginForm);