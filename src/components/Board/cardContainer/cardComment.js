import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import {commentO} from 'react-icons-kit/fa/commentO';

class CardComment extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="Description flex">
                <div className="cardIcon">
                    <Icon size={18} icon={commentO} />
                    <div className="userIcon">
                        AP
                    </div>
                </div>
                <div className="cardName comment">
                    <p className="name">Comment</p>
                    <textarea name="" id="" placeholder="Write a comment…"></textarea>
                    <div className="flex start">
                        <button className="green-button c">Save</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default CardComment;