import React, { Component } from 'react';
import '../../assets/style/BoardList/StarredBoards.less';
import BoardThumb from './BoardThumb';
import NewBoard from './NewBoards';
import { connect } from 'react-redux';
class PersonalBoards extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="AllBoards">
                {[...this.props.board.boards].map((x, i) =>
                    <BoardThumb boardName={x.name} key={i} boardIndex={i} starred={x.starred}/>
                )}
                <NewBoard />
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

export default connect(mapStateToProps, mapDispatchToProps)(PersonalBoards);
