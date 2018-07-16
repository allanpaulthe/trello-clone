import React, { Component } from 'react';
import '../assets/style/button.less'
class Button extends Component {
    render() {
        return (
            <a className="button mod-primary" href="">{this.props.text}</a>
        );
    }
}

export default Button;