import React from 'react';
import Logo from '../Ui/Logo';
import Link from 'next/link';

const Navbar = () => {

    const links = 
        <>
            <li>
                <Link href={'/'}>Home</Link>
            </li>
            <li>
                <Link href={'/'}>About</Link>
            </li>
            <li>
                <Link href={'/'}>Contact</Link>
            </li>
            <li>
                <Link href={'/'}>Others</Link>
            </li>
        
        </>



    return (
        <div className='layout-wrapper flex items-center justify-between py-4'>
            <Logo />
            <nav className='flex items-center'>
                <ul className='flex items-center gap-5'>{links}</ul>
            </nav>


            {/* button login logout */}
            <button>Login</button>
            
        </div>
    );
};

export default Navbar;