import React, { Component } from 'react';
import BoardLogo from './boardLogo';
import BoardSearchBar from './boardSearchBar';
import BoardHeaderLeft from './BoardHeaderLeft';
import trelloFull from '../../../assets/images/trelloFull.png';
import '../../../assets/style/Board/header/boardheader.less';
import { connect } from 'react-redux';

class BoardHeader extends Component {
    constructor(props) {
        super(props);
        this.handleMenuToggle = this.handleMenuToggle.bind(this);
    }
    handleMenuToggle() {
        this.props.toggleMenuShow();
    }
    render() {
        return (
            <div className="boardHeader" id="boardHeader">
                <div onClick={this.handleMenuToggle}>
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
const mapStateToProps = (state) => {
    return {
        board: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleMenuShow: () => {
            dispatch({
                type: "toggleMenuShow",
                payload: 0
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardHeader);
