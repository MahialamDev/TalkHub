'use client'
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';



const LoginBtn = () => {
    const session = useSession();
    console.log(session)
    return (
        <>
           {/* button login logout */}
            {session.status == 'loading' ?
                <p>Loading...</p> : session.status == 'authenticated' ? 
            
            <button onClick={()=>signOut()} className='btn btn-primary'>SignOut</button> :

            <Link href={'/login'}>
                <button className='btn btn-primary btn-outline'>Login</button>
            </Link> 
        }
        </>
    );
};

export default LoginBtn;