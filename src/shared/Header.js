import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import auth from '../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();

    const logout = () => {
        signOut(auth);
        navigate('/login');

    };

    const menuItem = <>
        <li className='mx-1'><Link to='/'>Home</Link></li>
        <li className='mx-1'><Link to='/blog'>Blog</Link></li>
        <li className='mx-1'>{
            user && <Link to='/dashboard'>Dashboard</Link>
        }
        </li>
        <li className='mx-1'>
            {user ? <> <small>{user.email}</small> <button onClick={logout} className='btn btn-ghost'>Sign out</button></>
                : <Link to='/login'>Login</Link>}
        </li>
    </>
    return (
        <div className="navbar bg-slate-200 shadow-lg z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <img className='' style={{ width: '70px', height: '50px' }} src={logo} alt="logo" />
                <a className="btn btn-ghost normal-case text-xl p-0">Stuff-N-More</a>
            </div>
            <div className="navbar-center hidden lg:flex ml-10">
                <ul className="menu menu-horizontal p-0 px-2">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                <label for="my-drawer-2" class="btn btn-secondary drawer-button lg:hidden">Click Me</label>
            </div>
        </div>
    );
};

export default Header;