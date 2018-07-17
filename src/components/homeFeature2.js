import React, { Component } from 'react';
import { Picture } from 'react-responsive-picture';
import Button from '../components/button';
import '../assets/style/homefeature2.less';

class HomeFeature2 extends Component {
    render() {
        return (
            <div className="feature2">
                <div className="feature2-wrap">
                    <div className="feature2-content">
                        <div className="feature2-heading">
                            <p> The Design Team shares updates on current projects so everyone in the company knows what's going on. </p>
                        </div>
                        <Picture
                            sources={[
                                {
                                    srcSet: "https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/f0455b0e7cbf32e0c66a5464ab6bc052/usecases-mobile-board01.jpg",
                                    media: "(max-width: 800px)",
                                },
                                {
                                    srcSet: "https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/07ced7d72fcf302f25981df3d6fdb46f/usecases-board01.jpg",
                                },
                            ]}
                        />
                    </div>
                </div>
                <div className="feature2-footer">
                    <div className="footer-center">
                        <p>From startups to Fortune 500 companies, Trello is the most visual way for teams to collaborate on any project. </p>
                        <Button text={"Create Your Board"} />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeFeature2;