import React, { Component } from 'react';
import NavBar from './Home/navbar';
import HomeLogin from './Home/homeLogin';
import HomeFeature1 from './Home/homeFeature1';
import HomeFeature2 from './Home/homeFeature2';
import HomeFeature3 from './Home/homeFeature3';
import HomeFeature4 from './Home/homeFeature4';
import HomeFeature5 from './Home/homeFeature5';
import HomeFeature6 from './Home/homeFeature6';
import Footer from './Home/footer';

class HomePage extends Component {
  render() {
    return (
      <div className="fullbody">
        <NavBar/>
        <HomeLogin/>
        <HomeFeature1/>
        <HomeFeature2/>
        <HomeFeature3/>
        <HomeFeature4/>
        <HomeFeature5/>
        <HomeFeature6/>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;
