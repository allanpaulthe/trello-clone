import React, { Component } from 'react';
import '../../assets/style/Board/createBoard.less';
import { Icon } from 'react-icons-kit';
import { ic_close } from 'react-icons-kit/md/ic_close';
import { check } from 'react-icons-kit/fa/check'
import { connect } from 'react-redux';


class LI extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    setBG(imageURL, listIndex) {
        if (listIndex < 2) {
            return { backgroundImage: `url(${imageURL})` }
        }
        else {
            return { backgroundColor: imageURL }
        }
    }
    handleClick() {
        this.props.changeBgPic(this.props.listIndex, this.props.elementIndex);
    }
    render() {
        let elementIndex = this.props.elementIndex;
        let listIndex = this.props.listIndex;
        let selectedElementIndex = this.props.selectedNewBoardImage[1];
        let selectedListIndex = this.props.selectedNewBoardImage[0];
        let displayTick = (listIndex === selectedListIndex) && (elementIndex === selectedElementIndex)
        return (
            <li className="list1"
                style={this.setBG(this.props.element, this.props.listIndex)}
                onClick={this.handleClick.bind(this)}
            >
                {displayTick &&
                    <Icon size={18} icon={check} />
                }
            </li>
        );
    }
}


class UL extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let list = this.props.list;
        let listIndex = this.props.listIndex;
        return (
            <ul className="first">
                {[...list].map((x, i) =>
                    <LI
                        element={x}
                        elementIndex={i}
                        listIndex={listIndex}
                        selectedNewBoardImage={this.props.selectedNewBoardImage}
                        changeBgPic={this.props.changeBgPic}
                    />
                )}
            </ul>
        );
    }
}



class CreateBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            editing: false
        };
    }
    handleChange(event) {
        if (this.state.title.length === 0) {
            this.setState({
                editing: false
            });
        }
        else {
            this.setState({
                editing: true
            });
        }
        this.setState({
            title: event.target.value
        });
    }
    handleCreate() {
        if (this.state.title.length === 0) {
            return false;
        }
        else {
            this.props.newBoard(this.state.title);
        }
    }
    handleClose() {
        this.props.newBoardToggle();
    }
    componentDidMount() {
        document.getElementById("createBoardContainer").scrollIntoView();
    }
    setBG() {
        let selectedNewBoardImage = this.props.selectedNewBoardImage;
        let listIndex = selectedNewBoardImage[0];
        let elementIndex = selectedNewBoardImage[1];

        let newBoardPic = this.props.newBoardPic;
        if (listIndex < 2) {
            return { backgroundImage: `url(${newBoardPic[listIndex][elementIndex]})` }
        }
        else {
            return { backgroundColor: newBoardPic[listIndex][elementIndex] }
        }

    }
    render() {
        let clas = this.state.editing ? "button green" : "button";
        return (
            <div className="absContainer createBoard">
                <div className="createBoardContainer" id="createBoardContainer">
                    <div className="top">
                        <div className="title"
                            style={this.setBG()}
                        >
                            <div className="iconClose" onClick={this.handleClose.bind(this)}>
                                <Icon size={16} icon={ic_close} />
                            </div>
                            <input type="text" placeholder="Add board title"
                                value={this.state.title}
                                onChange={this.handleChange.bind(this)}
                                required
                            />
                        </div>
                        <div className="colorBox">
                            {[...this.props.newBoardPic].map((x, i) =>
                                <UL
                                    list={x}
                                    listIndex={i}
                                    selectedNewBoardImage={this.props.selectedNewBoardImage}
                                    changeBgPic={this.props.changeBgPic}
                                />
                            )}
                        </div>
                    </div>
                    <div className={clas} onClick={this.handleCreate.bind(this)}>
                        Create Board
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        board: state,
        newBoardPic: state.newBoardPic,
        selectedNewBoardImage: state.selectedNewBoardImage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        newBoardToggle: () => {
            dispatch({
                type: "newBoardToggle",
                payload: 0
            })
        },
        newBoard: (title) => {
            dispatch({
                type: "newBoard",
                payload: title
            })
        },
        changeBgPic: (listId, elementId) => {
            dispatch({
                type: "changeBgPic",
                payload: { listId: listId, elementId: elementId }
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoard);

