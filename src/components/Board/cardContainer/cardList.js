import React, { Component } from 'react';
import '../../../assets/style/Board/cardContainer/cardList.less';
import CardSimple from './cardSimple';
import CreateCard from './CreateCard';

class CardList extends Component {
    state = {}
    render() {
        return (
            <div className="CardList">
                <CardSimple />
                <CardSimple />
                <CardSimple />
                <CardSimple />
                <CardSimple />
                <CardSimple />
                <CardSimple />
                <CardSimple />
                <CardSimple />
                <CardSimple />
                <CardSimple />
                <CardSimple />
                <CardSimple />
                <CardSimple />
                <CardSimple />
                <CardSimple />
                <CardSimple />
                <CardSimple />
                <CardSimple />
                <CardSimple />
                <CardSimple />
                <CardSimple />
                <CardSimple />
                <CardSimple />
                <CardSimple />
                <CardSimple />
                {this.props.addCard &&
                    <CreateCard toggle={this.props.toggle}/>
                }               
            </div>
        );
    }
}

export default CardList;