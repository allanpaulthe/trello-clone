import React from 'react';
import '../../../assets/style/Board/header/boardHeadButton.less';
import { starO } from 'react-icons-kit/fa/starO';
import { ic_close } from 'react-icons-kit/md/ic_close';
import { Icon } from 'react-icons-kit';

const BoardHeadButton = () => (
    <div className="BoardHeadButton">
        <div className="box">

        </div>
        <div className="boardname">
            my board
        </div>
        <div className="iconList">
            <Icon size={15} icon={ic_close} />
            <Icon size={15} icon={starO} />
        </div>
    </div>
);

export default BoardHeadButton;