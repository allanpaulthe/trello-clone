import React, { Component } from 'react';
import '../../assets/style/BoardList/StarredBoards.less';
import BoardThumb from './BoardThumb';
class StarredBoards extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="AllBoards">
                <BoardThumb/>
                <BoardThumb/>
                <BoardThumb/>
                <BoardThumb/>
            </div>
        );
    }
}

export default StarredBoards;