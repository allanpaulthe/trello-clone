import React, { Component } from 'react';

class SimpleComment extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="simpleComment">
                <div className="userIcon">
                    AP
                            </div>
                <div className="comment">
                    <p className="name">Alan Paul</p>
                    <p className="commentText">This is the comment</p>
                </div>
            </div>
        );
    }
}

export default SimpleComment;