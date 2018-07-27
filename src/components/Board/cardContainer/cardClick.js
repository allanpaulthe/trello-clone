import React, { Component } from 'react';
import '../../../assets/style/Board/cardContainer/cardClick.less';
import { Icon } from 'react-icons-kit';
import { ic_close } from 'react-icons-kit/md/ic_close';
import { ic_credit_card } from 'react-icons-kit/md/ic_credit_card';
import { alignCenter } from 'react-icons-kit/fa/alignCenter'
import CardDescription from './cardDescription';
import CardComment from './cardComment';
import { connect } from 'react-redux';
import SimpleComment from './simpleComment';


class CardClick extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    toggleExpand() {
        this.props.toggleCardExpand();
    }
    render() {
        let selectedBoard = this.props.board.selectedBoardId;
        let selectedList = this.props.board.selectedListId;
        let selectedCard = this.props.board.selectedCardId;
        let cardName = this.props.board.boards[selectedBoard].category[selectedList].cards[selectedCard].name;
        let listName=this.props.board.boards[selectedBoard].category[selectedList].name;
        return (
            <div className="absContainer flex">
                <div className="cardExpand">
                    <div className="header">
                        <div className="cardIcon">
                            <Icon size={20} icon={ic_credit_card} />
                        </div>
                        <div className="cardName">
                            <p className="name">{cardName}</p>
                            <p className="listName">in list <span className="underLine">{listName}</span></p>
                        </div>
                    </div>
                    <CardDescription />
                    <CardComment />
                    <div className="commentContainer">
                        <div className="activityHeading">
                            <Icon size={18} icon={alignCenter} />
                            <p className="commentHeading name">Activity</p>
                        </div>
                        <SimpleComment />
                    </div>
                    <div className="absIcon" onClick={this.toggleExpand.bind(this)}>
                        <Icon size={24} icon={ic_close} />
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
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardClick);
