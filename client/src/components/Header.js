import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to='/' className="item">Streamy</Link>
            <div className="left menu">
                {/* <Link to='/streams/show' className="item">Show</Link> */}
            </div>
            <div className="right menu">
                <GoogleAuth />
            </div>
        </div>
    );
};

export default Header;