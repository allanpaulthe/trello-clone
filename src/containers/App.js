import React, { Component } from 'react';
import Homepage from '../components/HomePage';
import Login from '../components/Login/login';
import BoardHeaderClick from '../components/Board/header/boardHeaderClick';
import BoardBG from '../components/Board/boardBG/boardBG';
import '../assets/style/app.less'

import BoardHeader from '../components/Board/header/boardHeader';
import SubHeader from '../components/Board/subHeader/subHeader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
    this.changeShowMenu = this.changeShowMenu.bind(this);
  }
  changeShowMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }
  render() {
    return (
      <div className="fullbody">
        {/* <Homepage/>
        <Login/> */}
        <BoardHeaderClick show={this.state.showMenu} />
        <BoardHeader changeShowMenu={this.changeShowMenu} />
        <SubHeader />
        <BoardBG />
      </div>
    );
  }
}

export default App;
