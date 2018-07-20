import React, { Component } from 'react';
import '../../../assets/style/Board/cardContainer/CreateCard.less';
import { Icon } from 'react-icons-kit';
import { ic_close } from 'react-icons-kit/md/ic_close';
import { ic_more_horiz } from 'react-icons-kit/md/ic_more_horiz';
import ReactDOM from 'react-dom';

class CreateCard extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        ReactDOM.findDOMNode(this).scrollIntoView();
    }
    handleClick() {
        this.props.toggle();
    }
    render() {
        return (
            <div className="CreateCard">
                <div className="input">
                    <textarea name="" id="" cols="30" rows="2" placeholder="Enter a title for this card..."></textarea>
                </div>
                <div className="list" >
                    <a href="">Add Card</a>
                    <Icon size={18} icon={ic_close} onClick={this.handleClick} />
                    <div className="more">
                        <Icon size={18} icon={ic_more_horiz} />
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateCard;