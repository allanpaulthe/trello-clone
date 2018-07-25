import React, { Component } from 'react';
import '../../../assets/style/Board/boardBG/boardBG.less';
import CardContainer from '../cardContainer/cardContainer';
import { connect } from 'react-redux';
class BoardBG extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        document.getElementById('fullbody').style.height = '100vh';
        document.getElementById('fullbody').style.maxHeight = '100vh';
    }
    render() {
        var index = this.props.location.state["index"];
        return (
            <div className="BoardBG">
                <div className="boardCanvas">
                    {[...(this.props.board.boards[index].category)].map((x, i) =>
                        <CardContainer 
                            category={x}
                        />
                    )}
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
        add: (value) => {
            dispatch({
                type: "nothing",
                payload: value
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardBG);
