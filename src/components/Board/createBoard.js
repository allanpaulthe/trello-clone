import React, { Component } from 'react';
import '../../assets/style/Board/createBoard.less';
import { Icon } from 'react-icons-kit';
import { ic_close } from 'react-icons-kit/md/ic_close';
import { connect } from 'react-redux';

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
        else{
            this.props.newBoard(this.state.title);
        }
    }
    handleClose(){
        this.props.newBoardToggle();
    }
    componentDidMount(){
        document.getElementById("createBoardContainer").scrollIntoView();
    }
    render() {
        let clas = this.state.editing ? "button green" : "button";
        return (
            <div className="absContainer createBoard">
                <div className="createBoardContainer" id="createBoardContainer">
                    <div className="top">
                        <div className="title">
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
                            <ul className="first">
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <ul className="second">
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <ul className="third">
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
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
        },
        newBoard: (title) => {
            dispatch({
                type: "newBoard",
                payload: title
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoard);
