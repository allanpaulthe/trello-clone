import React, { Component } from 'react';
import '../../assets/style/BoardList/menu.less';
import { Icon } from 'react-icons-kit';
import { home } from 'react-icons-kit/fa/home';
import { trello } from 'react-icons-kit/fa/trello';
import {plus} from 'react-icons-kit/fa/plus';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="BoardListMenu">
                <div className="home c">
                    <Icon size={14} icon={home} />
                    <div>Home</div>
                </div>
                <div className="boards c active">
                    <Icon size={14} icon={trello} />
                    <div>Boards</div>
                </div>
                <p>TEAMS</p>
                <div className="CreateTeam c">
                    <Icon size={12} icon={plus} />
                    <div>Create Teams</div>
                </div>
            </div>
        );
    }
}

export default Menu;