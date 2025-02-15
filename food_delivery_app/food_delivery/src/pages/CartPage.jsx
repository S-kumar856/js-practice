import React, { useState } from 'react';
import { useAppContext } from '../components/AppContext';

const CartPage = () => {
    const { cart, removeFromCart } = useAppContext();
    const [quantities, setQuantities] = useState({});
    const [showCheckout, setShowCheckout] = useState(false)

    const handleAdd = (id) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: (prev[id] || 1) + 1
        }))
    }

    const handleRemove = (id) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: (prev[id] > 1 ? prev[id] - 1 : 1)
        }))
    }

    const getTotalPrice = () => {
        return cart.reduce((total, item) => {
            const quantity = quantities[item.id] || 1;
            return total + item.price.single * quantity;
        }, 0);
    };

    const check = () =>{
        setShowCheckout(true)
    }

    return (
        <>
        {showCheckout ? (
            <div className="cart-checkout">
                checkout
            </div>
        ):(

            <div className="p-5">
                <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cart.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border-b">
                            <div>
                                <h2 className="text-lg font-semibold">{item.biryani_name}</h2>
                                <p>Price: ₹{item.price.single}</p>
                            </div>
                            <div className='border px-3 py-1 flex gap-3.5 items-center outline-0 rounded bg-green-100'>
                                <button className='md:text-3xl cursor-pointer' onClick={() => handleRemove(item.id)}>-</button>
                                <span>{quantities[item.id] || 1}</span>
                                <button className='text-2xl cursor-pointer' onClick={() => handleAdd(item.id)}>+</button>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-400"
                            >
                                Remove
                            </button>
                        </div>

                    ))
                )}
                <div className='mt-5 flex justify-evenly'>
                <div className=" text-xl font-bold">
                    Total Price: ₹{getTotalPrice()}
                </div>
                <div onClick={check} className='text-xl  border px-3 py-2 cursor-pointer hover:bg-black hover:text-white rounded'>
                    Check Out
                </div>
                </div>
            </div>
        )}
        </>
    );
};

export default CartPage;
