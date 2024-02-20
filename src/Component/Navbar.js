import React, { useContext } from 'react';
import logo from '../assets/img/logo.jpeg';
import user_icon from '../assets/img/user-icon.png'
import { Link } from 'react-router-dom';
import { MenuContext } from '../utils/MenuContext';

const Navbar = () => {
    const {itemCount} = useContext(MenuContext);
    console.log(itemCount);

    return (
        <div className=' p-2 shadow-lg  h-3/5 bg-red-400 flex items-center justify-between '>
            <img className='p-1 shadow-inner shadow-red-600 h-full rounded-full hover:shadow-lg hover:shadow-red-700' src={logo} alt='Logo' />

            <ul className='flex w-96 justify-evenly'>
                <Link to="/"><li className='mx-1 shadow-inner shadow-red-600 p-2 px-3 rounded-lg text-white font-semibold  hover:shadow-lg hover:shadow-red-700'>Home</li></Link>
                <Link to="/about"><li className='mx-1 shadow-inner shadow-red-600 p-2 px-3 rounded-lg text-white font-semibold  hover:shadow-lg hover:shadow-red-700'>About</li></Link>
                <Link to="/Contact"><li className='mx-1 shadow-inner shadow-red-600 p-2 px-3 rounded-lg text-white font-semibold  hover:shadow-lg hover:shadow-red-700'>Contact</li></Link>
                <Link to="/instamart"><li className='mx-1 shadow-inner shadow-red-600 p-2 px-3 rounded-lg text-white font-semibold  hover:shadow-lg hover:shadow-red-700'>InstaMart</li></Link>
            </ul>

            <ul className=' h-full w-1/6 flex items-center justify-evenly' >
                <Link to='/cart'><li className='mx-1 shadow-inner shadow-red-600 p-2 px-3 rounded-lg text-white font-semibold  hover:shadow-lg hover:shadow-red-700'>Cart-{itemCount}</li></Link>
                <img className='p-1 shadow-inner shadow-red-600  h-16 rounded-full hover:shadow-lg hover:shadow-red-700' src={user_icon} alt='user icon' />
            </ul>
        </div>
    )
}

export default Navbar;