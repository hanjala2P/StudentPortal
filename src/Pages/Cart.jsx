import React, { useContext } from 'react';
import { CartContext } from '../Providers/CartContex';


const Cart = () => {
     const {cart} =useContext(CartContext)
    //  const {cart,setCart} =useContext(CartContext)
    return (
        <div className='my-10 mx-10 grid grid-cols-1 gap-4 justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
            {
                cart.map(plant => <div className='flex' key={plant.id}>
                   <div className='p-4 rounded-sm flex flex-col gap-1 shadow-sm hover:shadow-xl transition-shadow duration-300'>
                     <img className='w-68 h-48 rounded-sm' src={plant.image} alt={plant.alt} />
                    <p className='font-bold'>{plant.name}</p>
                    <p>{plant.price}$</p>
                    <button className='btn  btn-primary'>Buy Now</button>
                   </div>
                    </div>)
            }
        </div>
    );
};

export default Cart;