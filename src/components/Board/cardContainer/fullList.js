import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import { ic_more_horiz } from 'react-icons-kit/md/ic_more_horiz';
import { ic_add } from 'react-icons-kit/md/ic_add';
import CardList from './cardList';
import { DragSource } from 'react-dnd';
import { DropTarget } from 'react-dnd';
import { connect } from 'react-redux';
//styles in cardContainer.less

class FullList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addCard: false,
        };
        this.changeClass = this.changeClass.bind(this);
    }
    changeClass() {
        this.setState({
            addCard: !this.state.addCard
        });
    }
    render() {
        const { isDragging, connectDragSource, connectDropTarget, isOver } = this.props;
        let dragStyle = isDragging || isOver ? "fullList drag" : "fullList";
        let clas = this.state.addCard ? "hidden" : "addCard";
        return connectDragSource(connectDropTarget(
            <div className={dragStyle}>
                <div className="heading">
                    <p>{this.props.category.name}</p>
                    <div>
                        <Icon size={18} icon={ic_more_horiz} />
                    </div>
                </div>
                <CardList addCard={this.state.addCard} toggle={this.changeClass} cards={this.props.category.cards} listId={this.props.listId} />
                <div className={clas} onClick={this.changeClass}>
                    <Icon size={16} icon={ic_add} />
                    <p>Add another card</p>
                </div>
            </div>
        ));
    }
}
const Types = {
    ITEM: 'CardList'
}

const itemSource = {
    beginDrag(props) {
        props.changeDragList(props.listId);
        return {
            listId: props.listId
        }
    },
    endDrag(props) {
        props.changeDragList(props.listId);
        return {
            listId: props.listId
        }
    }
}

const itemTarget = {
    hover(props, monitor, component) {
        props.changeDropList(props.listId);
        return {
            listId: props.listId
        }
    },
    drop(props, monitor, component) {
        props.checkDrop(props.listId);
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
        checkDrop: (listId) => {
            dispatch({
                type: "checkDrop",
                payload: listId
            })
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DragSource(Types.ITEM, itemSource, collect)((DropTarget(Types.ITEM, itemTarget, collectTarget))(FullList)));
