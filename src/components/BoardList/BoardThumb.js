import React from 'react';
import '../../assets/style/BoardList/BoardThumb.less';
import { Icon } from 'react-icons-kit';
import { starO } from 'react-icons-kit/fa/starO';
import { Link } from 'react-router-dom';

const BoardThumb = () => (
    <Link to="/user/Eachboards">
        <div className="boardThumb">
            <div>Board Name</div>
            <div className="star">
                <Icon size={16} icon={starO} />
            </div>
        </div>
    </Link>

);

export default BoardThumb;