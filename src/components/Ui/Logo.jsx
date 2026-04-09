
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link className='text-2xl font-bold' href='/'>Talk <span className='text-blue-500'>Hub</span></Link>
    );
};

export default Logo;