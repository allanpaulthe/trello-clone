import React, { Component } from 'react';
import '../../../assets/style/Board/subHeader/userlist.less';
class UserList extends Component {
    state = {}
    render() {
        return (
            <div className="UserList">
                <div>AP</div>
                <span className="member-type admin">
                </span>
            </div>
        );
    }
}

export default UserList;