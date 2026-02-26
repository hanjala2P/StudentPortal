import React from 'react';
import { useLocation } from 'react-router';

const AddtoCart = () => {
    const cart = useLocation()
    console.log(cart);
    return (
        <div className='bg-red-200 w-96 flex items-center gap-4 p-4 rounded-lg'>
            <img className='w-22 h-16' src={cart.state?.image} alt="Plant" />
            <div>               
                <h2>Name :{cart.state?.name}</h2>
                <h2>Price: ${cart.state?.price}</h2>
            </div>
        </div>
    );
};

export default AddtoCart;