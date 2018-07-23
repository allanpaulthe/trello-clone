import React, { Component } from 'react';
import '../../../assets/style/Board/cardContainer/cardContainer.less';
import { Icon } from 'react-icons-kit';
import { ic_more_horiz } from 'react-icons-kit/md/ic_more_horiz';
import { ic_add } from 'react-icons-kit/md/ic_add';
import CardList from './cardList';

class CardContainer extends Component {
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
        let clas = this.state.addCard ? "hidden" : "addCard";
        return (
            <div className="CardContainer" id="CardContainer">
                <div className="board">
                    <div className="heading">
                        <p>Done</p>
                        <div>
                            <Icon size={18} icon={ic_more_horiz} />
                        </div>
                    </div>
                    <CardList addCard={this.state.addCard} toggle={this.changeClass}/>
                    <div className={clas} onClick={this.changeClass}>
                        <Icon size={16} icon={ic_add} />
                        <p>Add another card</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardContainer;