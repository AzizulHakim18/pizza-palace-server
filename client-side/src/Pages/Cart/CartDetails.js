import React from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Actions/CartActions';
import { delteFromCart } from '../../Actions/CartActions';


const CartDetails = ({ item }) => {
    const { name, quantity, varient, price, prices, image } = item;


    const dispatch = useDispatch();
    return (
        <div className='flex justify-around items-center'>
            <div>
                <div className="avatar">
                    <div className="mask mask-squircle w-20 h-20">
                        <img src={image} alt="Pizza" />
                    </div>
                </div>
                <h1 className='text-xl font-semibold'>{name} [<span className='text-sm'>{varient}</span>]</h1>
                <h1 className='text-xl font-semibold'>Price:{quantity}*{prices[0][varient]}= {price}</h1>
                <h1 className='text-2xl font-bold'>Quantity: <button className=' text-green-700 m-2 p-2' onClick={() => { dispatch(addToCart(item, parseInt(quantity) + 1, varient)) }}>+</button>{quantity}<button className=' text-red-700 m-2 p-2' onClick={() => { dispatch(addToCart(item, parseInt(quantity) - 1, varient)) }}>-</button></h1>
                <hr className='text-cyan-700 m-2 p-2' />
            </div>

            <div>
                <button className='text-2xl font-bold text-red-700 m-2 p-2' onClick={() => dispatch(delteFromCart(item))}>X</button>
            </div>
        </div>
    );
};

export default CartDetails;