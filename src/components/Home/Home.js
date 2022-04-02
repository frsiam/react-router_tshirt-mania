import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import useTShirts from '../Hooks/useTshirt';
import Tshirt from '../Tshirt/Tshirt';

const Home = () => {
    const [tShirts, setTShirts] = useTShirts()
    const [cart, setCart] = useState([])

    const handleAddToCart = (selectedItem) => {
        const exists = cart.find(tShirts => tShirts._id === selectedItem._id)
        if(!exists){
            const newCart = [...cart, selectedItem]
            setCart(newCart)
        }
        else{
            alert('item already addeded')
        }
    }
    const handleRemoveItem = (selectedItem) => {
        console.log('remove',selectedItem)
        const rest = cart.filter(tShirts => tShirts._id !== selectedItem._id )
        setCart(rest)
    }
    return (
        <div className='grid grid-cols-4'>
            <div className='bg-orange-300 col-span-3 tshirt-container grid grid-cols-3 gap-6 m-6'>
                {
                    tShirts.map((tShirt, index) => <Tshirt handleAddToCart={handleAddToCart} key={index} tShirt={tShirt}></Tshirt>)
                }
            </div>
            <div className='bg-blue-300 col-span-1 cart-container'>
                <Cart handleRemoveItem={handleRemoveItem} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;