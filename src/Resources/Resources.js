import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Resources = () => {
    return (
        <div className='m-auto'>
            <nav className='inner-nav2 d-flex px-2'>
                <Link className='inner-link my-auto' to='activities'>Các hoạt động</Link>
                <Link className='inner-link my-auto' to='tests'>Tự kiểm tra trình độ</Link>
                <Link className='inner-link my-auto' to='parents'>Dành cho phụ huynh</Link>
                <Link className='inner-link my-auto' to='games'>Các trò chơi</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Resources