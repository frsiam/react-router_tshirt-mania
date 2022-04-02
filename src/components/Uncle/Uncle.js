import React from 'react';

const Uncle = ({house}) => {
    return (
        <div className='border border-2 border-rose-600 m-2 p-2 bg-violet-300 rounded-lg'>
            <h1>Uncle family</h1>
            <p>Hose: {house}</p>
        </div>
    );
};

export default Uncle;