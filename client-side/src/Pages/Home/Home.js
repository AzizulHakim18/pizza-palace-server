import React, { useEffect, useState } from 'react';
import Pizzadetails from './Pizzadetails';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../../Actions/PizzaActions'
import HomeBanner from './HomeBanner';


const Home = () => {

    const dispatch = useDispatch()

    const pizzasState = useSelector(state => state.getAllPizzaReducer)
    const { pizzas, error, loading } = pizzasState


    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])

    return (


        <div>
            <div>
                <HomeBanner></HomeBanner>
            </div>
            <div>
                <div className='flex justify-center	items-center mt-4 pt-8'>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-5/6 lg:gap-4 md:gap-2'>

                        {loading ? (<h1>Loadin</h1>) : error ? (<h1>something went wrong</h1>) : (

                            pizzas.map((pizza) => <Pizzadetails
                                key={pizza._id}
                                pizza={pizza}
                            ></Pizzadetails>)

                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;