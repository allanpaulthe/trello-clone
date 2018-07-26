import React from 'react';
import {ic_add} from 'react-icons-kit/md/ic_add';
import {ic_info_outline} from 'react-icons-kit/md/ic_info_outline';
import {ic_notifications_none} from 'react-icons-kit/md/ic_notifications_none';
import { Icon } from 'react-icons-kit'
import '../../../assets/style/Board/header/BoardHeaderLeft.less';
import { connect } from 'react-redux';


const BoardHeaderLeft = (props) => (
    <div className="BoardHeaderLeft" onClick={props.newBoardToggle}>
        <div className="plus box">
            <Icon size={23} icon={ic_add} />
        </div>
        <div className="information box">
            <Icon size={20} icon={ic_info_outline} />
        </div>
        <div className="notification box">
            <Icon size={22} icon={ic_notifications_none} />
        </div>
        <div className="user box round">
            AP
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        board: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        newBoardToggle: () => {
            dispatch({
                type: "newBoardToggle",
                payload: 0
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardHeaderLeft);
