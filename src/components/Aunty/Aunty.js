import React from 'react';

const Aunty = ({house}) => {
    return (
        <div className='border border-2 border-rose-600 m-2 p-2 bg-pink-300 rounded-lg'>
            <h1>Aunty family</h1>
            <p>House: {house}</p>
        </div>
    );
};

export default Aunty;