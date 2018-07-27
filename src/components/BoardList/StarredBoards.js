import React, { Component } from 'react';
import '../../assets/style/BoardList/StarredBoards.less';
import BoardThumb from './BoardThumb';
import { connect } from 'react-redux';
class StarredBoards extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="AllBoards">
                {[...this.props.board.boards].map((x, i) => {
                    if (x.starred) {
                        return <BoardThumb boardName={x.name} key={i} boardIndex={i} starred={x.starred} />
                    }
                }
                )}
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
        add: (value) => {
            dispatch({
                type: "nothing",
                payload: value
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StarredBoards);
