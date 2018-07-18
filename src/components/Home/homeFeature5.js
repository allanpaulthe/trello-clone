import React, { Component } from 'react';
import '../../assets/style/Home/homefeature5.less'
import { Picture } from 'react-responsive-picture';

class HomeFeature5 extends Component {
    render() {
        return (
            <div className="feature5">
                <div className="feature5-content">
                    <div className="feature5-content-text">
                        <h2>A Productivity Platform</h2>
                        <p>Integrate the apps your team already uses directly into your workflow. Power-Ups turn Trello boards into living applications to meet your team's unique business needs.</p>
                        <a href="" class="button blue-button"> Power-Up Your Workflow </a>
                    </div>
                    <div className="feature5-content-pic">
                        <Picture
                            sources={[
                                {
                                    srcSet: "https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/c66b31f34142c6f1f3ba0e0655cf3486/usecases-powerups.png",
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeFeature5;