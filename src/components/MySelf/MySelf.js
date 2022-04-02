import React from 'react';
import Special from '../Special/Special';

const MySelf = ({house, ornament}) => {
    return (
        <div className='border rounded-lg border-rose-600 m-2 p-2 bg-lime-200'>
            <h1 className='text-xl font-semibold'>Mine</h1>
            <p>House: {house}</p>
            <Special ornament={ornament}></Special>
        </div>
    );
};

export default MySelf;