import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../../Actions/OrderActions';
import { toast } from 'react-hot-toast';


const CheckOuts = ({ subTotal }) => {


    const dispatch = useDispatch()
    const tokenHandler = (token) => {
        console.log(token);

        if (dispatch(placeOrder(token, subTotal))) {
            toast.success('Successfully ordered')
        }
        else {
            toast.error("Something is wrong please try again")
        }

    }

    return (



        <div>




            <StripeCheckout
                amount={subTotal * 100}
                shippingAddress
                token={tokenHandler}
                stripeKey='pk_test_51MgoJaFdccroNVypuuZGPgtQVhNwjoDrUvCYcBqHTr1YTcGi6xQ6YweFSERzV0v0y1IcRlQghNSZmEZiTaHHUbsW001OA1n9hy'
                currency='BDT'
            >
                <button className="btn btn-outline btn-success">Pay Now</button>
            </StripeCheckout>
        </div>
    );
};

export default CheckOuts;