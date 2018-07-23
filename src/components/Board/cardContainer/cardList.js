import React, { Component } from 'react';
import '../../../assets/style/Board/cardContainer/cardList.less';
import CardSimple from './cardSimple';
import CreateCard from './CreateCard';
import ReactDOM from 'react-dom';

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editOn: false,
            editTop: 0
        };
        this.editCard = this.editCard.bind(this);
    }
    editCard(height) {
        var containerHeight = ReactDOM.findDOMNode(this).scrollHeight;
        if (height > containerHeight - 100) {
            height = height - 100;
        }
        this.setState({
            editTop: height,
            editOn: true
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
                <CardSimple editCard={this.editCard} />
                <CardSimple editCard={this.editCard} />
                <CardSimple editCard={this.editCard} />
                <CardSimple editCard={this.editCard} />
                <CardSimple editCard={this.editCard} />
                <CardSimple editCard={this.editCard} />
                <CardSimple editCard={this.editCard} />
                <CardSimple editCard={this.editCard} />
                <CardSimple editCard={this.editCard} />
                <CardSimple editCard={this.editCard} />
                <CardSimple editCard={this.editCard} />
                <CardSimple editCard={this.editCard} />
                <CardSimple editCard={this.editCard} />
                <CardSimple editCard={this.editCard} />
                <CardSimple editCard={this.editCard} />
                <CardSimple editCard={this.editCard} />
                <CardSimple editCard={this.editCard} />
                <CardSimple editCard={this.editCard} />
                {this.props.addCard &&
                    <CreateCard toggle={this.props.toggle} />
                }
                {this.state.editOn &&
                    <div className="editCard"
                        style={{
                            top: this.state.editTop
                        }}
                    >
                        <textarea name="" id="" cols="28" rows="8"></textarea>
                        <a onClick={this.closeEdit.bind(this)}>Save</a>
                    </div>
                }
            </div>
        );
    }
}

export default CardList;