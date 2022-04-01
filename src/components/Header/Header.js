import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Welcome to tshirt Mania</h1>
            <nav className='my-4'>
                <Link className='mr-6 bg-red-500 px-4 py-1 text-yellow-50 rounded-lg text-xl font-semibold' to='home'>Home</Link>
                <Link className='mr-6 bg-lime-400 px-4 py-1 rounded-lg text-xl font-semibold' to='/orderreview'>Order Review</Link>
                <Link className='mr-6 bg-orange-400 px-4 py-1 rounded-lg text-gray-100 text-xl font-semibold' to='cart'>Cart</Link>
            </nav>
        </div>
    );
};

export default Header;