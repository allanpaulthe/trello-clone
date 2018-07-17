import React, { Component } from 'react';
import Button from '../components/button';
import '../assets/style/homefeature1.less'

class HomeFeature1 extends Component {
    render() {
        return (
            <div className="feature1">
                <div className="centered-feature1">
                    <h1>Trello lets you work more collaboratively and get more done.</h1>
                    <p>Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible and rewarding way. </p>
                    <Button text="Sign Up – It’s Free."/>
                </div>
                <div class="centered-feature1">
                    <p class="small">Already use Trello? <a href="">Log in.</a> </p>
                </div>
            </div>
        );
    }
}

export default HomeFeature1;