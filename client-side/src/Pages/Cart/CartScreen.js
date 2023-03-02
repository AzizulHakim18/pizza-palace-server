import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartDetails from './CartDetails';
import CheckOuts from './CheckOuts';
const CartScreen = () => {

    const cartstate = useSelector(state => state.cartReducer)
    const cartItems = cartstate.cartItems

    let subTotal = cartItems.reduce((x, item) => x + item.price, 0)
    return (
        <div className='flex justify-center relative top-10'>


            <div className='mx-8 px-4'>
                <h1 className='text-2xl font-bold text-green-500 text-center mt-7 border-b-4 border-indigo-500'>My Cart</h1>

                {
                    cartItems.map(item => <CartDetails
                        item={item}
                        key={item._id}
                    ></CartDetails>)
                }

            </div>
            <div className='my-10 py-10 mx-4 px-2 '>
                <h1 className='lg:text-3xl md:2xl sm:xl font-bold mt-7 text-red-700 border-b-4 border-green-500'>SubTotal </h1>

                <h1 className='lg:text-2xl sm:sm font-bold my-4 text-center'>{subTotal} BDT</h1>
                <CheckOuts subTotal={subTotal}></CheckOuts>

            </div>
        </div>
    );
};

export default CartScreen;