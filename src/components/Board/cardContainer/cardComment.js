import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import { commentO } from 'react-icons-kit/fa/commentO';
import { connect } from 'react-redux';

class CardComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentText: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            commentText: event.target.value
        })
    }
    handleSubmit() {
        if (this.state.commentText.length === 0) {
            return false;
        }
        else {
            this.props.addComment(this.state.commentText);
            this.setState({
                commentText: ''
            })
        }
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
                    <textarea name="" placeholder="Write a comment…"
                        value={this.state.commentText}
                        onChange={this.handleChange.bind(this)}
                    ></textarea>
                    <div className="flex start">
                        <button className="green-button c"
                            onClick={this.handleSubmit}
                        >Save</button>
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
        addComment: (comment) => {
            dispatch({
                type: "addComment",
                payload: comment
            })
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardComment);
