import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-green-200 pb-3'>
            <h1 className='text-4xl my-2 font-serif font-bold text-rose-500 bg-lime-400 py-2'>Welcome to tshirt Mania</h1>
            <nav className='my-4'>
                <Link className='mr-6 bg-red-500 px-4 py-1 text-yellow-50 rounded-lg text-xl font-semibold' to='home'>Home</Link>
                <Link className='mr-6 bg-lime-400 px-4 py-1 rounded-lg text-xl font-semibold' to='/orderreview'>Order Review</Link>
                <Link className='mr-6 bg-orange-400 px-4 py-1 rounded-lg text-gray-100 text-xl font-semibold' to='/'>Cart</Link>
                <Link className='mr-6 bg-orange-400 px-4 py-1 rounded-lg text-gray-100 text-xl font-semibold' to='grandpa'>Grandpa</Link>
            </nav>
        </div>
    );
};

export default Header;