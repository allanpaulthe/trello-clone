import React from 'react';
import '../../assets/style/BoardList/NewBoards.less';
import { connect } from 'react-redux';
const NewBoard = (props) => (
    <div className="NewBoard" onClick={() => props.newBoardToggle()}>
        <div>Create new board...</div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        board: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        newBoardToggle: () => {
            dispatch({
                type: "newBoardToggle",
                payload: 0
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewBoard);
