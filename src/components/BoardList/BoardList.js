import React, { Component } from 'react';
import '../../assets/style/BoardList/BoardList.less';
import Menu from './menu';
import StarredBoards from './StarredBoards';
import PersonalBoards from './PersonalBoards';
import { Icon } from 'react-icons-kit';
import {starO} from 'react-icons-kit/fa/starO';
import {userO} from 'react-icons-kit/fa/userO';

class BoardList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="BoardList">
                <div className="container">
                    <div className="menu">
                        <Menu />
                    </div>
                    <div className="list">
                        <div className="listCategory">
                            <Icon size={16} icon={starO} />
                            <div>Starred Boards</div>
                        </div>
                        <StarredBoards/>
                        <div className="listCategory">
                            <Icon size={16} icon={userO} />
                            <div>Personal Boards</div>
                        </div>
                        <PersonalBoards/>
                        <div className="CreateText">
                            Create a new team...
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BoardList;