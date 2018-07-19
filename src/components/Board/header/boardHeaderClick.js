import React, { Component } from 'react';
import '../../../assets/style/Board/header/boardHeaderClick.less';
import { starO } from 'react-icons-kit/fa/starO';
import { minus } from 'react-icons-kit/fa/minus';
import { clockO } from 'react-icons-kit/fa/clockO';
import {books} from 'react-icons-kit/icomoon/books';
import { Icon } from 'react-icons-kit';
import BoardHeadbutton from './boardHeadButton';

class BoardHeaderClicked extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="BoardHeaderClicked">
                <div className="content">
                    <input type="text" placeholder="Find boards by name…" />
                    <div className="boardList">
                        <div className="first">
                            <div className="common">
                                <Icon size={13} icon={starO} />
                                <p>STARRED BOARDS</p>
                                <div className="left">
                                    <Icon size={12} icon={minus} />
                                </div>
                            </div>
                            <div className="tip">
                                Star your most important boards to keep them right at your fingertips.
                            </div>
                        </div>
                        <div>
                            <div className="common">
                                <Icon size={13} icon={clockO} />
                                <p>RECENT BOARDS</p>
                                <div className="left">
                                    <Icon size={12} icon={minus} />
                                </div>
                            </div>
                            <BoardHeadbutton/>
                            <BoardHeadbutton/>
                        </div>
                        <div>
                            <div className="common">
                                <Icon size={13} icon={books} />
                                <p>PERSONAL BOARDS</p>
                                <div className="left">
                                    <Icon size={12} icon={minus} />
                                </div>
                            </div>
                            <BoardHeadbutton/>
                        </div>
                        <div className="last">
                            <div>Create new board</div>
                            <div>Always keep this menu open.</div>
                            <div>See closed boards</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BoardHeaderClicked;