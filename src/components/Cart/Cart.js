import React from 'react';

const Cart = ({cart,handleRemoveItem}) => {
    // conditional rendering options
    // 1. Element variable
    // 2. ternary operator 
    // 3. && Operator (shorthand) if condition is true then execute
    // 4. || if conditon is false then execute
    let command;
    if(cart.length ===0){
        command = <p>Please add item...</p>
    }
    else if(cart.length === 1){
        command = <p>Please add more...</p>
    }
    else if(cart.length === 2){
        command = <p>If you add another item then you got 1 free item</p>
    }
    else{
        command = <p><small>Congratulation !!!<br/>Thanks for adding</small></p>
    }

    return (
        <div>
            <h1>Item Selected: {cart.length}</h1>
            {
                cart.map((tShirt, index) => <p>
                    {tShirt.name}
                    <button onClick={()=> handleRemoveItem(tShirt)} className='border px-2 ml-6 bg-black text-white'>X</button>
                </p>)
            }
            {/* || Operator  */}
            {cart.length === 0 || <div className='bg-orange-400'>
                <p>YAY ! you are buying</p>
                </div>
            }
            {/* && operator  */}
            {cart.length === 3 && <div>
                <h1>Manager er kas theke gift collect kore nen sir</h1>
                </div>
            }
            {/* simple element operator  */}
            {command}
            {/* ternary  */}
            {cart.length !== 4 ? <p>Keep adding</p> : <button className='border px-2'>Remove all</button>}
            {/* && opetator  */}
            {cart.length === 4 && <button className='border px-3 bg-black text-white rounded-md ml-2 py-2'>Review Order</button>}
        </div>
    );
};

export default Cart;