import React, { Component } from 'react';
import '../../../assets/style/Board/header/boardHeadButton.less';
import { starO } from 'react-icons-kit/fa/starO';
import { ic_close } from 'react-icons-kit/md/ic_close';
import { Icon } from 'react-icons-kit';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class BoardHeadButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleClick() {
        this.props.changeBoard(this.props.boardIndex);
        this.props.toggleMenuShow();
    }
    toggleStar() {
        this.props.toggleStarFromMenu(this.props.boardIndex);
    }
    render() {
        return (
            <div className="BoardHeadButton">
                <div className="box">

                </div>
                <Link to={{ pathname: '/user/Eachboards', state: { index: this.props.boardIndex } }}>
                    <div className="boardname" onClick={this.handleClick.bind(this)}>
                        {this.props.name}
                    </div>
                </Link>
                {!this.props.starred &&
                    <div className="iconList" onClick={this.toggleStar.bind(this)}>
                        {/* <Icon size={16} icon={ic_close} /> */}
                        <Icon size={16} icon={starO} />
                    </div>
                }
                {this.props.starred &&
                    <div className="iconList starred" onClick={this.toggleStar.bind(this)}>
                        <Icon size={16} icon={starO} />
                    </div>
                }
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
        toggleStarFromMenu: (index) => {
            dispatch({
                type: "toggleStarFromMenu",
                payload: index
            })
        },
        changeBoard: (index) => {
            dispatch({
                type: "changeBoard",
                payload: index
            })
        },
        toggleMenuShow: () => {
            dispatch({
                type: "toggleMenuShow",
                payload: 0
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardHeadButton);
