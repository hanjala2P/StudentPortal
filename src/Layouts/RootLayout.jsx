import React, {  useState } from 'react';
import { Outlet } from 'react-router';
import Nav from '../Componants/Nav';
import Footer from '../Componants/Footer';
import { useNavigation } from 'react-router';
import LoadingSpiner from '../Componants/LodingSpiner';
import { CartContext } from '../Providers/CartContex';



const RootLayout = () => {
     const [cart,setCart]=useState([])
    const navigation =useNavigation();
    console.log(navigation.state);
    return (
         <CartContext.Provider value={{cart,setCart}}>
            <Nav></Nav>
            {
                navigation.state === 'loading'? <LoadingSpiner/> :( 
                     <main className='min-h-[calc(100vh-290px)]'>
                       <Outlet/>
                    </main>)
            }
          
           < Footer/>

        </CartContext.Provider>
    );
};

export default RootLayout;