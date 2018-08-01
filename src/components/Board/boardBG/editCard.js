import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditCard extends Component {
    constructor(props) {
        super(props);
        var boardId = this.props.board.selectedBoardId;
        var listId = this.props.board.selectedListId;
        var cardId = this.props.board.selectedCardId;
        this.state = {
            value: this.props.board.boards[boardId].category[listId].cards[cardId].name
        }
    }
    saveEdit(e) {
        e.preventDefault();
        this.props.saveEdit(this.state.value);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    componentDidMount() {
        document.getElementById("editCard").scrollIntoView();
    }
    render() {
        return (
            <div className="absContainer">
                <div className="editCard"
                    style={{
                        top: this.props.board.editY,
                        left: this.props.board.editX+6
                    }}

                    id="editCard"
                >
                    <textarea name="" id="" cols="25" rows="5" value={this.state.value} onChange={this.handleChange.bind(this)}>
                        {this.state.value}
                    </textarea>
                    <a onClick={this.saveEdit.bind(this)}>Save</a>
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
        saveEdit: (value) => {
            dispatch({
                type: "saveEdit",
                payload: value
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCard);