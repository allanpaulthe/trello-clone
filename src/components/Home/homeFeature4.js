import React, { Component } from 'react';
import '../../assets/style/Home/homefeature4.less'
import { Picture } from 'react-responsive-picture';

class HomeFeature4 extends Component {
    render() {
        return (
            <div className="feature4">
                <div className="feature4-content">
                    <div className="feature4-text">
                        <h2>Work With Any Team</h2>
                        <p>Whether it’s for work, a side project or even the next family vacation, Trello helps your team stay organized.</p>
                        <a class="button pink-button" target="_blank"> Build Your Dream Team </a>
                    </div>
                    <div className="feature4-pic">
                        <Picture
                            sources={[
                                {
                                    srcSet: "https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/43e915441342077c5fdc6be43b9c1c86/usecases-tiles.jpg",
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeFeature4;