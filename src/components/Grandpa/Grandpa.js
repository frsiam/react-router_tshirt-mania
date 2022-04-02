import React from 'react';
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import Aunty from '../Aunty/Aunty'

const Grandpa = () => {
    const house = 7
    return (
        <div className=' border-4 rounded-lg border-orange-400 m-6 py-8'>
            <h1 className='text-4xl text-pink-500 font-serif font-semibold mb-3'>Grandpa's Family</h1>
            <div className='flex border-2 rounded-lg border-gray-500  justify-center mx-6'>
                <Father house={house}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </div>
        </div>
    );
};

export default Grandpa;