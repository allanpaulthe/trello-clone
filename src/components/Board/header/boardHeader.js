import React, { Component } from 'react';
import BoardLogo from './boardLogo';
import BoardSearchBar from './boardSearchBar';
import BoardHeaderLeft from './BoardHeaderLeft';
import trelloFull from '../../../assets/images/trelloFull.png';
import '../../../assets/style/Board/header/boardheader.less';

class BoardHeader extends Component {
    constructor(props) {
        super(props);
        this.handleMenuToggle = this.handleMenuToggle.bind(this);
    }
    handleMenuToggle() {
        this.props.changeShowMenu();
    }
    render() {
        return (
            <div class="boardHeader">
                <div  onClick={this.handleMenuToggle}>
                    <BoardLogo />
                </div>
                <BoardSearchBar />
                <div className="trelloLogo">
                    <img src={trelloFull} alt="Trello logo" />
                </div>
                <div className="left">
                    <BoardHeaderLeft />
                </div>
            </div>
        );
    }
}


export default BoardHeader;