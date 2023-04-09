import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {


    const NavBar =
        <>
            <li><Link>Home</Link></li>
            <li><Link>About Me</Link></li>
            <li><Link>Hobbies</Link></li>
            <li><Link>University</Link></li>
        </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <a href='/' className="btn btn-ghost text-white normal-case text-xl">Riyad</a>
            </div>
            <div className="navbar-end hidden lg:flex text-white font-semibold">
                <ul className="menu menu-horizontal px-1">
                    {NavBar}
                </ul>
            </div>
            <div className='lg:hidden navbar-end'>
                <div className="dropdown">
                    <label tabIndex={1} htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {NavBar}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;