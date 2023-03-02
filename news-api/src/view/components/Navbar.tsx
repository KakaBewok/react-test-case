/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar: React.FC = () => (
    <div className="navbar bg-slate-100 sticky top-0 z-50">
        <Link to='/home' style={{ color: 'black', textDecoration: 'none' }}>
            <h1 className="btn btn-ghost normal-case text-2xl font-bold no-underline">TodayNews</h1>
        </Link>
    </div>
);

export default Navbar;