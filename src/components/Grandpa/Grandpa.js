import React, { createContext, useState } from 'react';
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import Aunty from '../Aunty/Aunty'

export const RingContext = createContext('gold ring')

const Grandpa = () => {
    const [house, setHouse] = useState(1)
    const ornament = 'diamond ring'

    const handleBuyHouse = () => {
        setHouse(house + 1)
    }
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className=' border-4 rounded-lg border-orange-400 m-6 py-8'>
                <h1 className='text-4xl text-pink-500 font-serif font-semibold mb-3'>Grandpa's Family</h1>
                <button onClick={handleBuyHouse} className='border bg-orange-500 font-semibold m-2 px-2'>Buy A house</button>
                <p className='mb-4'>Total House: {house}</p>
                <div className='flex border-2 rounded-lg border-gray-500  justify-center mx-6'>
                    <Father house={house} ornament={ornament}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;