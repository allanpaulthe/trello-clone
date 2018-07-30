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
    componentDidMount() {
        document.getElementById('fullbody').style.height = '100vh';
        document.getElementById('fullbody').style.maxHeight = '100vh';
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
    handleSubmit(){
        if(this.state.listTitle.length===0){
            this.toggleNewList();
            return false;
        }
        else{
            this.props.newList(this.state.listTitle);
            this.setState({
                listTitle:''
            })
            this.toggleNewList();
        }
    }
    render() {
        var index = this.props.location.state["index"];
        let clas1 = this.state.newList ? "hidden" : "createNewList";
        let clas2 = this.state.newList ? "expandNewList" : "hidden";
        return (
            <div className="BoardBG">
                <div className="boardCanvas">
                    {[...(this.props.board.boards[index].category)].map((x, i) =>
                        <CardContainer
                            category={x}
                            listId={i}
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
        board: state
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

export default  DragDropContext(HTML5Backend)(connect(mapStateToProps, mapDispatchToProps)(BoardBG));
