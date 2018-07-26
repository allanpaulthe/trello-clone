import React, { Component } from 'react';
import '../../../assets/style/Board/cardContainer/cardList.less';
import CardSimple from './cardSimple';
import CreateCard from './CreateCard';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
        };
    }
    render() {
        return (
            <div className="CardList">
                {[...(this.props.cards)].map((x, i) =>
                    <CardSimple text={x.name} cardId={i} listId={this.props.listId}/>
                )}
                {this.props.addCard &&
                    <CreateCard toggle={this.props.toggle} listId={this.props.listId}/>
                }
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
        add: (value) => {
            dispatch({
                type: "nothing",
                payload: value
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
