import React from 'react';
import MySelf from '../MySelf/MySelf'
import Brother from '../Brother/Brother'
import Sister from '../Sister/Sister'

const Father = ({ house, ornament }) => {
    return (
        <div className='border-2 rounded-lg border-rose-600 m-2 p-2 bg-lime-200'>
            <h1 className='text-xl font-semibold'>Father gusti</h1>
            <p>House: {house}</p>
            <div className='border-2 border-black flex rounded-lg'>
                <MySelf house={house} ornament={ornament}></MySelf>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;