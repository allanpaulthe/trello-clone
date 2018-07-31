import React, { Component } from 'react';
import '../../../assets/style/Board/cardContainer/cardContainer.less';
import FullList from './fullList';
class CardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="CardContainer" id="CardContainer">
                <FullList
                    category={this.props.category}
                    listId={this.props.listId}
                />
            </div>
        );
    }
}

export default CardContainer;