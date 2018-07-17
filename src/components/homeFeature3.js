import React, { Component } from 'react';
import { Picture } from 'react-responsive-picture';
import '../assets/style/homefeature3.less';
class Homefeature3 extends Component {
    render() {
        return (
            <div className="feature3">
                <div className="feature3-heading">
                    <h2>Information At A Glance</h2>
                    <p>Dive into the details by adding comments, attachments, and more directly to Trello cards. Collaborate on projects from beginning to end. </p>
                </div>
                <Picture
                    sources={[
                        {
                            srcSet: "https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/1c8ff82a1f9856939f9145f12b7096ed/usecases-mobile-card.jpg",
                            media: "(max-width: 800px)",
                        },
                        {
                            srcSet: "https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/1b9100e29afb7df3e805a6c5210a202e/usecases-card.jpg",
                        },
                    ]}
                />
            </div>
        );
    }
}

export default Homefeature3;