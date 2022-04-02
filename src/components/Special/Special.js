import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div className='border-2 bg-slate-100 border-r-lime-600'>
            <h1 className='text-xl font-semibold'>Special</h1>
            <p>{house}</p>
            <button onClick={() => setHouse(house + 1)} className='bg-black text-white px-2'>Buy House</button>
        </div>
    );
};

export default Special;