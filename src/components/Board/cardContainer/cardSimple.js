import React from 'react';
import '../../../assets/style/Board/cardContainer/cardSimple.less';
import { Icon } from 'react-icons-kit';
import {ic_mode_edit} from 'react-icons-kit/md/ic_mode_edit'


const CardSimple = () => (
    <div className="CardSimple">
        <p className="text">card contentfdgfdgtft tft6 frtftf frfrt frtftf tfrtfrt</p>
        <div className="edit">
            <Icon size={13} icon={ic_mode_edit} />
        </div>
    </div>
);

export default CardSimple;