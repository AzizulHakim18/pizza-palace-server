import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersOrders } from '../../Actions/OrderActions';

const OrdersScreen = () => {


    const dispatch = useDispatch()
    const orderstate = useSelector(state => state.getUserOrdersReducer)
    const { orders } = orderstate

    useEffect(() => {
        dispatch(getUsersOrders())
    }, [])


    return (
        <div className='flex justify-center'>
            <h1 className='text-2xl font-bold text-green-700'>My Orders</h1>


            <div>
                {
                    orders && orders.map(order => {
                        return <div>
                            {
                                order.orderItems.map(item => {
                                    return <div>
                                        <h1>{item.name}</h1>
                                    </div>
                                })
                            }
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default OrdersScreen;