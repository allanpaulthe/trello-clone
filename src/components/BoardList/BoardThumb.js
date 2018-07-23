import React from 'react';
import '../../assets/style/BoardList/BoardThumb.less';
import { Icon } from 'react-icons-kit';
import { starO } from 'react-icons-kit/fa/starO'

const BoardThumb = () => (
    <div className="boardThumb">
        <div>Board Name</div>
        <div className="star">
            <Icon size={16} icon={starO} />
        </div>
    </div>
);

export default BoardThumb;