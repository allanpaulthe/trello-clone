import React, { Component } from 'react';
import '../../assets/style/BoardList/StarredBoards.less';
import BoardThumb from './BoardThumb';
import NewBoard from './NewBoards';

class PersonalBoards extends Component {
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
                <NewBoard/>
            </div>
        );
    }
}

export default PersonalBoards;