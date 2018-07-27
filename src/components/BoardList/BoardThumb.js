import React, { Component } from 'react';
import '../../assets/style/BoardList/BoardThumb.less';
import { Icon } from 'react-icons-kit';
import { starO } from 'react-icons-kit/fa/starO';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class BoardThumb extends Component {
    state = {}
    handleClick() {
        this.props.changeBoard(this.props.boardIndex);
    }
    toggleStar(event) {
        event.stopPropagation();
        this.props.changeBoard(this.props.boardIndex);
        this.props.toggleStar(this.props.boardIndex);
    }
    render() {
        return (
            <div className="relativeParent">
                <Link to={{ pathname: '/user/Eachboards', state: { index: this.props.boardIndex } }}>
                    <div className="boardThumb" onClick={this.handleClick.bind(this)}>
                        <div>{this.props.boardName}</div>
                    </div>
                </Link>
                {this.props.starred &&
                    <div className="star" onClick={this.toggleStar.bind(this)}>
                        <Icon size={16} icon={starO} />
                    </div>
                }
                {!this.props.starred &&
                    <div className="star-hover" onClick={this.toggleStar.bind(this)}>
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
        changeBoard: (index) => {
            dispatch({
                type: "changeBoard",
                payload: index
            })
        },
        toggleStar: (index) => {
            dispatch({
                type: "toggleStar",
                payload: index
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardThumb);