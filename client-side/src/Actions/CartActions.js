import { toast } from "react-hot-toast"


export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {



    const cartItem = {
        name: pizza.name,
        _id: pizza._id,
        image: pizza.image,
        varient: varient,
        quantity: quantity,
        prices: pizza.prices,
        price: pizza.prices[0][varient] * quantity

    }

    if (cartItem.quantity > 6) {
        // alert('You can not add more than 6 items')
        toast.error('You can not add more than 6 items.')
    }
    else {
        if (cartItem.quantity < 1) {
            dispatch({ type: "DELETE_FROM_CART", payload: pizza })
            toast.success('successfully deleted the item.')
        }
        else {
            dispatch({ type: 'ADD_TO_CART', payload: cartItem })

        }

    }


    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const delteFromCart = (pizza) => (dispatch, getState) => {

    dispatch({ type: "DELETE_FROM_CART", payload: pizza })
    toast.error('Successfully deleted from the cart.')
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}