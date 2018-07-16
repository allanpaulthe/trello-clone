import React, { Component } from 'react';
import NavBar from '../components/navbar';
import HomeLogin from '../components/homeLogin';
import HomeFeature1 from '../components/homeFeature1';
import HomeFeature2 from '../components/homeFeature2';
import '../assets/style/app.less'

class App extends Component {
  render() {
    return (
      <div className="fullbody">
        <NavBar/>
        <HomeLogin/>
        <HomeFeature1/>
        <HomeFeature2/>
      </div>
    );
  }
}

export default App;
