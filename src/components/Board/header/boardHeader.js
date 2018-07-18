import React from 'react';
import BoardLogo from './boardLogo';
import BoardSearchBar from './boardSearchBar';
import BoardHeaderLeft from './BoardHeaderLeft';
import trelloFull from '../../../assets/images/trelloFull.png';
import '../../../assets/style/Board/header/boardheader.less';

const BoardHeader = () => (
    <div class="boardHeader">
        <BoardLogo />
        <BoardSearchBar />
        <div className="trelloLogo">
            <img src={trelloFull} alt="Trello logo" />
        </div>
        <div className="left">
            <BoardHeaderLeft />
        </div>
    </div>
);

export default BoardHeader;