import React from 'react';
import './Header.css';

const Header = () => {

    return (
        <div className="header">
            <nav>
                <a href="/webdev">Web Dev</a>
                <a href="/mobiledev">Mobile Dev</a>
                <a href="design">Design</a>
                <a href="/admin">Admin Support</a>
                <a href="/customer">Customer Service</a>
            </nav>
            <h2>Make an Developement Team.</h2>
            <h4>Find quality freelancers and agencies for web and mobile development</h4>
            <h4>Total Budget: 10 Millions</h4>


        </div>
    );
};

export default Header;