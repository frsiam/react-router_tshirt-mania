import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = ({house}) => {
    const ring = useContext(RingContext)
    return (
        <div className='border border-2 border-rose-600 m-2 p-2 bg-pink-300 rounded-lg'>
            <h1 className='text-xl font-semibold'>Aunty family</h1>
            <p>House: {house}</p>
            <p><small>{ring}</small></p>
        </div>
    );
};

export default Aunty;