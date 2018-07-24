import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import Homepage from '../components/HomePage';
import Login from '../components/Login/login';
import BoardHeaderClick from '../components/Board/header/boardHeaderClick';
import BoardBG from '../components/Board/boardBG/boardBG';
import '../assets/style/app.less'

import BoardHeader from '../components/Board/header/boardHeader';
import SubHeader from '../components/Board/subHeader/subHeader';
import BoardList from '../components/BoardList/BoardList';

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
      <Router>
        <div className="fullbody" id="fullbody">
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={Login} />



          
          <Route path="/user"
            component={() => <BoardHeader changeShowMenu={this.changeShowMenu} />}
          />
          <Route path="/user"
            component={() => <BoardHeaderClick show={this.state.showMenu} />}
          />
          <Route path="/user/boards" component={BoardList} />



          <Route path="/user/Eachboards" component={SubHeader} />
          <Route path="/user/Eachboards" component={BoardBG} />
        </div>
      </Router>
    );
  }
}

export default App;
