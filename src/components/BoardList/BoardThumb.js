import React, { Component } from 'react';
import '../../assets/style/BoardList/BoardThumb.less';
import { Icon } from 'react-icons-kit';
import { starO } from 'react-icons-kit/fa/starO';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class BoardThumb extends Component {
    state = {}
    handleClick(){
        this.props.changeBoard(this.props.boardIndex);
    }
    render() {
        return (
            <Link to={{ pathname: '/user/Eachboards', state: { index: this.props.boardIndex} }}>
                <div className="boardThumb" onClick={this.handleClick.bind(this)}>
                    <div>{this.props.boardName}</div>
                    <div className="star">
                        <Icon size={16} icon={starO} />
                    </div>
                </div>
            </Link>
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
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardThumb);