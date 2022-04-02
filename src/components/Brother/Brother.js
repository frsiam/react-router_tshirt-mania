import React from 'react';

const Brother = ({house}) => {
    return (
        <div className='border border-rose-600 m-2 p-2 bg-lime-200'>
            <h1>Brother hero</h1>
            <p>House: {house}</p>
        </div>
    );
};

export default Brother;