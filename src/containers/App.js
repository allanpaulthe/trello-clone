import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from '../components/HomePage';
import Login from '../components/Login/login';
import BoardHeaderClick from '../components/Board/header/boardHeaderClick';
import BoardBG from '../components/Board/boardBG/boardBG';
import '../assets/style/app.less'

import BoardHeader from '../components/Board/header/boardHeader';
import SubHeader from '../components/Board/subHeader/subHeader';
import BoardList from '../components/BoardList/BoardList';

import EditCard from '../components/Board//boardBG/editCard';
import CreateBoard from "../components/Board/createBoard";
import CardClick from '../components/Board/cardContainer/cardClick';

import { connect } from 'react-redux';


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
          {this.props.board.editCard &&
            <EditCard />//styles in app.less
          }

          {this.props.board.newBoard &&
            <CreateBoard />
          }

          {this.props.board.cardClick &&
            <CardClick />
          }

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

const mapStateToProps = (state) => {
  return {
    board: state
  };
};

export default connect(mapStateToProps)(App);
