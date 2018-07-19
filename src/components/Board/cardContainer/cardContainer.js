import React, { Component } from 'react';
import '../../../assets/style/Board/cardContainer/cardContainer.less';
import { Icon } from 'react-icons-kit';
import { ic_more_horiz } from 'react-icons-kit/md/ic_more_horiz';
import {ic_add} from 'react-icons-kit/md/ic_add';
import CardList from './cardList';

class CardContainer extends Component {
    state = {}
    render() {
        return (
            <div className="CardContainer">
                <div className="board">
                    <div className="heading">
                        <p>Done</p>
                        <div>
                            <Icon size={18} icon={ic_more_horiz} />
                        </div>
                    </div>
                    <CardList />
                    <div className="addCard">
                        <Icon size={16} icon={ic_add} />
                        <p>Add another card</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardContainer;