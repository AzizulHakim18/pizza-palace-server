import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../Actions/CartActions';

const Pizzadetails = ({ pizza }) => {

    const { image, name, prices, varients } = pizza;
    const [quantity, setQuantity] = useState(1);
    const [varient, setVerient] = useState('small');

    const dispatch = useDispatch()
    const addtoCart = () => {
        dispatch(addToCart(pizza, quantity, varient))
    }
    return (
        <div>
            <div className="card card-compact lg:w-96 md:w-60 sm:w-48 bg-base-100 shadow-red-600 shadow-xl lg:mx-2 lg:px-4">
                <figure className='w-full h-40'><img className='sm:w-48 lg:w-full md:w-full' src={image} alt="pizza" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-black">{name}</h2>
                    {/* <p>{description}</p> */}
                    <div >
                        <div className='flex justify-between items-center'>
                            <p className='lg:text-xl font-semibold '>Quantity</p>
                            <select className='m-2 p-2 border border-amber-600 lg:text-xl font-medium' value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                                {[...Array(5).keys()].map((x, i) => {
                                    return <option value={i + 1}>{i + 1}</option>
                                })}
                            </select>
                        </div>

                        <div className='flex justify-between items-center'>
                            <p className='lg:text-xl font-semibold '>Varients</p>
                            <select className='m-2 p-2 border border-amber-600 lg:text-xl font-medium' value={varient} onChange={(e) => { setVerient(e.target.value) }}>{varients.map(varient => { return <option value={varient}>{varient}</option> })}</select>
                        </div>

                    </div>
                    <div className="card-actions flex justify-between items-center">
                        {/* <h2>Price:{prices[0](varient) * quantity} Taka</h2> */}
                        <h2 className='lg:text-xl font-bold text-black'>Price:{prices[0][varient] * quantity} BDT</h2>
                        <button className="btn bg-blue-500 shadow-lg shadow-blue-500/50 " onClick={addtoCart}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pizzadetails;