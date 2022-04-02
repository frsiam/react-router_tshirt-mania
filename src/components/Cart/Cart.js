import React from 'react';

const Cart = ({cart,handleRemoveItem}) => {
    return (
        <div className='fixed right-40'>
            <h1>Item Selected: {cart.length}</h1>
            {
                cart.map((tShirt, index) => <p>
                    {tShirt.name}
                    <button onClick={()=> handleRemoveItem(tShirt)} className='border px-2 ml-6 bg-black text-white'>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;