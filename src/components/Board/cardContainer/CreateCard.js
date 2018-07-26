import React, { Component } from 'react';
import '../../../assets/style/Board/cardContainer/CreateCard.less';
import { Icon } from 'react-icons-kit';
import { ic_close } from 'react-icons-kit/md/ic_close';
import { ic_more_horiz } from 'react-icons-kit/md/ic_more_horiz';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class CreateCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardText: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        ReactDOM.findDOMNode(this).scrollIntoView();
    }
    handleClick() {
        if (this.state.cardText.length === 0) {
            this.props.toggle();
            return false;
        }
        else{
            this.props.toggle();
            this.props.setListId(this.props.listId);
            this.props.newCard(this.state.cardText);
        }
    }
    handleChange(event) {
        this.setState({
            cardText: event.target.value
        });
    }
    handleClose() {
        this.props.toggle();
    }
    render() {
        return (
            <div className="CreateCard">
                <div className="input">
                    <textarea name="" id="" cols="30" rows="2" placeholder="Enter a title for this card..."
                        onChange={this.handleChange.bind(this)}
                        value={this.state.cardText}
                    >
                    </textarea>
                </div>
                <div className="list" >
                    <a onClick={this.handleClick.bind(this)}>Add Card</a>
                    <Icon size={18} icon={ic_close} onClick={this.handleClose.bind(this)} />
                    <div className="more">
                        <Icon size={18} icon={ic_more_horiz} />
                    </div>
                </div>
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
        newCard: (value) => {
            dispatch({
                type: "newCard",
                payload: value
            })
        },
        setListId: (listId) => {
            dispatch({
                type: "setLisId",
                payload: listId
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCard);
