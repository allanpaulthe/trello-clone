import React, { Component } from 'react';
import '../../../assets/style/Board/boardBG/boardBG.less';
import CardContainer from '../cardContainer/cardContainer';

class BoardBG extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount(){
        document.getElementById('fullbody').style.height='100vh';
        document.getElementById('fullbody').style.maxHeight='100vh';
    }
    render() {
        return (
            <div className="BoardBG">
                <div className="boardCanvas">
                    {/* add board here */}
                    <CardContainer />
                    <CardContainer />
                    <CardContainer />
                    <CardContainer />
                    <CardContainer />
                    <CardContainer />
                    <CardContainer />
                    <CardContainer />
                </div>
            </div>
        );
    }
}

export default BoardBG;