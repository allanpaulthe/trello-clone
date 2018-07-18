import React from 'react';
import '../../../assets/style/Board/header/boardLogo.less';
import trello  from '../../../assets/images/trello.png';

const BoardLogo = () => (
    <div className="BoardLogo">
        <div className="logo">
            <img src={trello} alt="logo"/>
        </div>
        <div className="text">
            Boards
        </div>
    </div>
);

export default BoardLogo;