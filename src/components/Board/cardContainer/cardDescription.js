import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import { ic_close } from 'react-icons-kit/md/ic_close';
import { alignLeft } from 'react-icons-kit/fa/alignLeft';
import { connect } from 'react-redux';
// styles in cardClick.less

class CardDescription extends Component {
    constructor(props) {
        super(props);
        let selectedBoard = this.props.board.selectedBoardId;
        let selectedList = this.props.board.selectedListId;
        let selectedCard = this.props.board.selectedCardId;
        this.state = {
            value: '',
            Empty: true,
            hide: true,
            description: this.props.board.boards[selectedBoard].category[selectedList].cards[selectedCard].description,
            editOn: false
        };
    }
    handleChange(event) {
        this.setState({
            value: event.target.value,
        });
        if (this.state.value.length !== 0) {
            this.setState({
                Empty: false
            })
        }
        else {
            this.setState({
                Empty: true
            })
        }
    }
    handleChangeNew(event) {
        this.setState({
            description: event.target.value,
            value:event.target.value
        });
        if (this.state.value.length !== 0) {
            this.setState({
                Empty: false
            })
        }
        else {
            this.setState({
                Empty: true
            })
        }
    }
    toggleHideShow() {
        this.setState({
            hide: false
        })
    }
    toggleHide() {
        this.setState({
            hide: true,
            value: ''
        })
    }
    handleSubmit() {
        this.props.changeDescription(this.state.value);
        this.toggleHide();
        this.setState({
            editOn: false
        })
    }
    showTextArea() {
        let selectedBoard = this.props.board.selectedBoardId;
        let selectedList = this.props.board.selectedListId;
        let selectedCard = this.props.board.selectedCardId;
        this.setState({
            editOn: true,
            description: this.props.board.boards[selectedBoard].category[selectedList].cards[selectedCard].description
        })
    }
    render() {
        let clas = this.state.Empty ? "green-button c disable" : "green-button c";
        let clas1 = this.state.hide ? "hidden" : "flex start";
        let selectedBoard = this.props.board.selectedBoardId;
        let selectedList = this.props.board.selectedListId;
        let selectedCard = this.props.board.selectedCardId;
        let description = this.props.board.boards[selectedBoard].category[selectedList].cards[selectedCard].description;
        let editOrNot = description.length === 0 ? "hidden" : "desEmpty";
        let haveDescription = description.length === 0 ? false : true;
        let textareaClass = description.length === 0 ? " " : "hidden";
        return (
            <div className="Description flex">
                <div className="cardIcon">
                    <Icon size={18} icon={alignLeft} />
                </div>
                <div className="cardName">
                    <p className="name">Description <span className={editOrNot} onClick={this.showTextArea.bind(this)}>Edit</span> </p>
                    <div className={textareaClass}>
                        <textarea name="" id="" placeholder="Add a more detailed description…"
                            value={this.state.value}
                            onChange={this.handleChange.bind(this)}
                            onClick={this.toggleHideShow.bind(this)}
                        ></textarea>
                    </div>
                    {this.state.editOn &&
                        <div>
                            <textarea name="" id=""
                                value={this.state.description}
                                onChange={this.handleChangeNew.bind(this)}
                                onClick={this.toggleHideShow.bind(this)}
                            ></textarea>
                        </div>
                    }
                    {haveDescription && !this.state.editOn &&
                        <p className="descText">{description}</p>
                    }
                    <div className={clas1}>
                        <button className={clas}
                            onClick={this.handleSubmit.bind(this)}
                        >Save</button>
                        <div className="flex aCenter" onClick={this.toggleHide.bind(this)}>
                            <Icon size={24} icon={ic_close} />
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
        toggleCardExpand: () => {
            dispatch({
                type: "toggleCardExpand",
                payload: 0
            })
        },
        changeDescription: (value) => {
            dispatch({
                type: "changeDescription",
                payload: value
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardDescription);
