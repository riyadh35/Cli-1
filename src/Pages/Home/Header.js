import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div style={{ backgroundColor: '#FBD062' }} className="navbar ">
            <div className="navbar-start">
                {/* <img className=" normal-case w-24" src='' alt="" /> */}
                <a className='btn btn-ghost normal-case text-xl' href="#">Riyad</a>
            </div>
            <div className="navbar-end  hidden lg:flex">
                <ul className="flex text-black">
                    <li className='p-4'><NavLink element={'/'}>Home</NavLink></li>
                    <li className='p-4'><NavLink >Our Portfolio</NavLink></li>
                    <li className='p-4'><NavLink>Our Team</NavLink></li>
                    <li className='p-4'><NavLink>Contract</NavLink></li>
                </ul>
            </div>

        </div>
    );
};

export default Header;