import React, { Component } from 'react';
import '../assets/style/homefeature6.less';

class HomeFeature6 extends Component {
    render() {
        return (
            <div className="feature6">
                <div className="feature6-content">
                    <div className="feature6-content-text">
                        <h2>Always In Sync</h2>
                        <p>No matter where you are, Trello stays in sync across all of your devices. Collaborate with your team anywhere, from sitting on the bus to sitting on the beach.</p>
                        <a href="https://itunes.apple.com/app/trello-organize-anything/id461504587"><img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/0c89bea1f934eadd07d8284fead760d6/btn-appstore.png" width="159" alt="Download on the App Store" /></a>
                        <a href="https://play.google.com/store/apps/details?id=com.trello"><img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/2d8bf64328f6c2666c1d5a3558fd7042/btn-playstore.png" width="169" alt="Download on Google Play" /></a>
                    </div>
                    <div className="feature6-content-pic">
                        <div className="content-bg-pic">
                            <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/60dc711cb04607c6a8a0c55b045aeb6d/usecases-taco.jpg" alt="Meet Taco, our spokes-husky!" />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default HomeFeature6;