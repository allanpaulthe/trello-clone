import React, { Component } from 'react';
import '../../../assets/style/Board/boardBG/boardBG.less';
import CardContainer from '../cardContainer/cardContainer';
import { Icon } from 'react-icons-kit';
import { ic_close } from 'react-icons-kit/md/ic_close';
import { connect } from 'react-redux';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
class BoardBG extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newList: false,
            listTitle: ''
        };
    }
    componentDidUpdate() {
        let selectedBoardId = this.props.board.selectedBoardId;
        let imageListId = this.props.board.boards[selectedBoardId].BoardImage[0];
        let imageElementId = this.props.board.boards[selectedBoardId].BoardImage[1];
        let newBoardPic = this.props.newBoardPic;
        document.getElementById('fullbody').style.height = '100vh';
        document.getElementById('fullbody').style.maxHeight = '100vh';
        if (imageListId < 2) {
            document.getElementById('fullbody').style.backgroundImage = `url(${newBoardPic[imageListId][imageElementId]})`;
            document.getElementById('fullbody').style.backgroundSize = 'cover';
            document.getElementById('fullbody').style.backgroundRepeat = 'no-repeat';
            document.getElementById('fullbody').style.backgroundPosition = '50% 50%';
            document.getElementById('fullbody').style.objectFit = 'cover';
        }
        else {
            document.getElementById('fullbody').style.backgroundImage = '';
            document.getElementById('fullbody').style.backgroundColor = newBoardPic[imageListId][imageElementId];
        }
    }
    componentDidMount() {
        let selectedBoardId = this.props.board.selectedBoardId;
        let imageListId = this.props.board.boards[selectedBoardId].BoardImage[0];
        let imageElementId = this.props.board.boards[selectedBoardId].BoardImage[1];
        let newBoardPic = this.props.newBoardPic;
        document.getElementById('fullbody').style.height = '100vh';
        document.getElementById('fullbody').style.maxHeight = '100vh';
        if (imageListId < 2) {
            document.getElementById('fullbody').style.backgroundImage = `url(${newBoardPic[imageListId][imageElementId]})`;
            document.getElementById('fullbody').style.backgroundSize = 'cover';
            document.getElementById('fullbody').style.backgroundRepeat = 'no-repeat';
            document.getElementById('fullbody').style.backgroundPosition = '50% 50%';
            document.getElementById('fullbody').style.objectFit = 'cover';
        }
        else {
            document.getElementById('fullbody').style.backgroundImage = '';
            document.getElementById('fullbody').style.backgroundColor = newBoardPic[imageListId][imageElementId];
        }
    }
    toggleNewList() {
        this.setState({
            newList: !this.state.newList
        });
    }
    handleChange(event) {
        this.setState({
            listTitle: event.target.value
        })
    }
    handleSubmit() {
        if (this.state.listTitle.length === 0) {
            this.toggleNewList();
            return false;
        }
        else {
            this.props.newList(this.state.listTitle);
            this.setState({
                listTitle: ''
            })
            this.toggleNewList();
        }
    }
    render() {
        var index = this.props.location.state["index"];
        let clas1 = this.state.newList ? "hidden" : "createNewList";
        let clas2 = this.state.newList ? "expandNewList" : "hidden";
        return (
            <div className="BoardBG" id="BoardBG">
                <div className="boardCanvas">
                    {[...(this.props.board.boards[index].category)].map((x, i) =>
                        <CardContainer
                            category={x}
                            listId={i}
                            key={i}
                        />
                    )}
                    <div className={clas1} onClick={this.toggleNewList.bind(this)}>
                        + Add another list
                    </div>
                    <div className={clas2}>
                        <input type="text" placeholder="Enter list title..."
                            value={this.state.listTitle}
                            onChange={this.handleChange.bind(this)}
                        />
                        <div className="bottom">
                            <a className="button-green" onClick={this.handleSubmit.bind(this)}>Add List</a>
                            <div className="icon" onClick={this.toggleNewList.bind(this)}>
                                <Icon size={20} icon={ic_close} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        board: state,
        newBoardPic: state.newBoardPic
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        newList: (title) => {
            dispatch({
                type: "newList",
                payload: title
            })
        }
    };
};

export default DragDropContext(HTML5Backend)(connect(mapStateToProps, mapDispatchToProps)(BoardBG));
