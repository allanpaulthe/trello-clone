import React, { Component } from 'react';
import '../assets/style/footer.less';

const Footer = () => (
    <div className="footer">
        <ul>
            <li><a href="">Tour</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Apps</a></li>
            <li><a href="">Jobs</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Developers</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Help</a></li>
            <li><a href="">Legal</a></li>
            <li><a href="">Privacy</a></li>
        </ul>
        <p>
            <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/6cdbcb3dcf82bba860f1768d184161ee/atlassian-logo-gray-small.svg" width="150" alt="logo"/>
            © Copyright 2018. All rights reserved
        </p>
    </div>
);

export default Footer;