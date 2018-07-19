import React from 'react';
import '../../../assets/style/Board/boardBG/boardBG.less';
import CardContainer from '../cardContainer/cardContainer';

const BoardBG = () => (
    <div className="BoardBG">
        <div className="boardCanvas">
            {/* add board here */}
            <CardContainer/>
            <CardContainer/>
            <CardContainer/>
            <CardContainer/>
            <CardContainer/>
            <CardContainer/>
            <CardContainer/>
            <CardContainer/>
        </div>
    </div>
);

export default BoardBG;