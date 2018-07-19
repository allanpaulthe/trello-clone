import React, { Component } from 'react';
import { search } from 'react-icons-kit/fa/';
import { ic_close } from 'react-icons-kit/md/ic_close';
import { exportIcon } from 'react-icons-kit/entypo/exportIcon';
import { Icon } from 'react-icons-kit'
import '../../../assets/style/Board/header/boardSearchBar.less';


class BoardSearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            big: false
        };
    }

    changeClass() {
        this.setState({ big: !this.state.big });
    }
    render() {
        let clas = this.state.big ? "BoardSearchBarClicked" : "BoardSearchBar";
        return (
            <div className={clas}>
                <div className="input">
                    <input type="text" onClick={this.changeClass.bind(this)} />
                </div>
                {!this.state.big ? (
                    <div className="logo">
                        <Icon size={16} icon={search} />
                    </div>
                ) : (
                        <div className="logoSet">
                            <div className="logo">
                                <Icon size={20} icon={exportIcon} />
                            </div>
                            <div className="logo">
                                <Icon size={21} icon={ic_close} onClick={this.changeClass.bind(this)} />
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default BoardSearchBar;