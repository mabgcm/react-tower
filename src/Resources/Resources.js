import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Resources = () => {
    return (
        <div className='m-auto'>
            <nav className='inner-nav px-2'>
                <Link className='inner-link my-auto' to='activities'>Activities</Link>
                <Link className='inner-link my-auto' to='tests'> Self-Tests</Link>
                <Link className='inner-link my-auto' to='parents'>Parents</Link>
                <Link className='inner-link my-auto' to='games'>Games</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Resources