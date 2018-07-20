import React, { Component } from 'react';
import '../../../assets/style/Board/cardContainer/cardSimple.less';
import { Icon } from 'react-icons-kit';
import { ic_mode_edit } from 'react-icons-kit/md/ic_mode_edit';
import ReactDOM from 'react-dom';


class CardSimple extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.displayPosition = this.displayPosition.bind(this);
    }
    displayPosition() {
        var n = ReactDOM.findDOMNode(this);
        alert(n.offsetTop);
    }
    render() {
        return (
            <div className="CardSimple">
                <p className="text">card content</p>
                <div className="edit" onClick={this.displayPosition}>
                    <Icon size={13} icon={ic_mode_edit} />
                </div>
            </div>
        );
    }
}

export default CardSimple;