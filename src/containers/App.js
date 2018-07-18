import React, { Component } from 'react';
import Homepage from '../components/HomePage';
import Login from '../components/Login/login';
import '../assets/style/app.less'

class App extends Component {
  render() {
    return (
      <div className="fullbody">
        <Homepage/>
        <Login/>
      </div>
    );
  }
}

export default App;
