import React from 'react';
import './TShirt.css'

const Tshirt = ({handleAddToCart, tShirt}) => {
    const {name, price, picture} = tShirt
    return (
        <div className=' p-2 t-shirt grid justify-center rounded-lg border-2 border-blue-600'>
            <img src={picture} alt="" className='h-70 rounded-lg'/>
            <h1 className='text-xl font-semibold mt-2 grid justify-start'>{name}</h1>
            <p className='grid justify-start font-semibold'>Price: ${price}</p>
            <button onClick={() => handleAddToCart(tShirt)} className='border-2 border-black my-2 py-2 px-1'>Add To Cart</button>
        </div>
    );
};

export default Tshirt;