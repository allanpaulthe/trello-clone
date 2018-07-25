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
            editOn: false,
            editTop: 0,
            card:0
        };
        this.editCard = this.editCard.bind(this);
    }
    editCard(height,cardId) {
        var containerHeight = ReactDOM.findDOMNode(this).scrollHeight;
        if (height > containerHeight - 100) {
            height = height - 100;
        }
        this.setState({
            editTop: height,
            editOn: true,
            card:cardId
        });
    }
    closeEdit() {
        this.setState({
            editOn: false
        });
    }
    render() {
        return (
            <div className="CardList">
                {[...(this.props.cards)].map((x, i) =>
                    <CardSimple editCard={this.editCard} text={x.name} cardId={i}/>
                )}
                {this.props.addCard &&
                    <CreateCard toggle={this.props.toggle} />
                }
                {this.state.editOn &&
                    <div className="editCard"
                        style={{
                            top: this.state.editTop
                        }}
                    >
                        <textarea name="" id="" cols="28" rows="8">
                            {this.props.cards[this.state.card].name}
                        </textarea>
                        <a onClick={this.closeEdit.bind(this)}>Save</a>
                    </div>
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
