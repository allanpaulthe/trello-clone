import React from 'react';
import { search } from 'react-icons-kit/fa/';
import { Icon } from 'react-icons-kit'
import '../../../assets/style/Board/header/boardSearchBar.less';

const BoardSearchBar = () => (
    <div className="BoardSearchBar">
        <div className="input">
            <input type="text" />
        </div>
        <div className="logo">
            <Icon size={16} icon={search} />
        </div>
    </div>
);

export default BoardSearchBar;