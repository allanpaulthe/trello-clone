import React, { Component } from 'react';
import '../../../assets/style/Board/cardContainer/cardSimple.less';
import { Icon } from 'react-icons-kit';
import { ic_mode_edit } from 'react-icons-kit/md/ic_mode_edit';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';


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
        return (
            <div className="absCard">
                <div className="CardSimple" onClick={this.cardClickExpand.bind(this)}>
                    <p className="text">{this.props.text}</p>
                </div>
                <div className="edit" onClick={this._onMouseMove.bind(this)}>
                    <Icon size={13} icon={ic_mode_edit} />
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
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardSimple);
