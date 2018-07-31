import React, { Component } from 'react';
import '../../../assets/style/Board/cardContainer/cardSimple.less';
import { Icon } from 'react-icons-kit';
import { ic_mode_edit } from 'react-icons-kit/md/ic_mode_edit';
import { commentO } from 'react-icons-kit/fa/commentO';
import { alignLeft } from 'react-icons-kit/fa/alignLeft';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { DragSource } from 'react-dnd';
import { DropTarget } from 'react-dnd';


class CardSimple extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    _onMouseMove(e) {
        var n = ReactDOM.findDOMNode(this);
        let { x, y } = n.getBoundingClientRect();
        this.props.setCardAndListId(this.props.cardId, this.props.listId);
        this.props.setXandY(x, y);
    }
    cardClickExpand() {
        this.props.setCardAndListId(this.props.cardId, this.props.listId);
        this.props.toggleCardExpand();
    }
    render() {
        let cardId = this.props.cardId;
        let listId = this.props.listId;
        let boardId = this.props.board.selectedBoardId;
        let descriptionLength = this.props.board.boards[boardId].category[listId].cards[cardId].description.length;
        let commentLength = this.props.board.boards[boardId].category[listId].cards[cardId].comments.length;
        const { isDragging, connectDragSource, connectDropTarget, isOver } = this.props;
        let dragClass = isDragging || isOver ? "CardSimple dragCard" : "CardSimple";
        return connectDragSource(connectDropTarget(
            <div className="absCard">
                <div className={dragClass} onClick={this.cardClickExpand.bind(this)}>
                    <p className="text">{this.props.text}</p>
                    <div className="propList">
                        {descriptionLength > 0 && <Icon size={12} icon={alignLeft} className="icon" />}
                        {commentLength > 0 &&
                            <div className="commentNo">
                                <Icon size={12} icon={commentO} className="icon" />
                                <p>{commentLength}</p>
                            </div>
                        }
                    </div>
                </div>
                <div className="edit" onClick={this._onMouseMove.bind(this)}>
                    <Icon size={13} icon={ic_mode_edit} />
                </div>
            </div>
        ));
    }
}
const Types = {
    ITEM: 'SimpleCard'
}

const itemSource = {
    beginDrag(props) {
        props.changeDragList(props.listId);
        props.changeDragCard(props.cardId);
        return {
            listId: props.listId
        }
    },
    endDrag(props) {
        props.changeDragList(props.listId);
        props.changeDragCard(props.cardId);
        return {
            listId: props.listId
        }
    }
}

const itemTarget = {
    hover(props, monitor, component) {
        props.changeDropList(props.listId);
        props.changeDropCard(props.cardId);
        return {
            listId: props.listId
        }
    },
    drop(props, monitor, component) {
        props.checkDropCard();
        return {
            listId: props.listId
        }
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}
function collectTarget(connect, monitor) {
    return {
        isOver: monitor.isOver(),
        connectDropTarget: connect.dropTarget()
    }
}


const mapStateToProps = (state) => {
    return {
        board: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setXandY: (x, y) => {
            dispatch({
                type: "setXandY",
                payload: { x: x, y: y }
            })
        },
        setCardAndListId: (cardId, listId) => {
            dispatch({
                type: "setCardandLisId",
                payload: { cardId: cardId, listId: listId }
            })
        },
        toggleCardExpand: () => {
            dispatch({
                type: "toggleCardExpand",
                payload: 0
            })
        },
        changeDragList: (listId) => {
            dispatch({
                type: "changeDragList",
                payload: listId
            })
        },
        changeDropList: (listId) => {
            dispatch({
                type: "changeDropList",
                payload: listId
            })
        },
        changeDragCard: (cardId) => {
            dispatch({
                type: "changeDragCard",
                payload: cardId
            })
        },
        changeDropCard: (cardId) => {
            dispatch({
                type: "changeDropCard",
                payload: cardId
            })
        },
        checkDropCard: () => {
            dispatch({
                type: "checkDropCard",
                payload: 0
            })
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DragSource(Types.ITEM, itemSource, collect)((DropTarget(Types.ITEM, itemTarget, collectTarget))(CardSimple)));
