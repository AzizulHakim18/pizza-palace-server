import { combineReducers } from 'redux'
import { legacy_createStore as createStore } from 'redux'
import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { getAllPizzaReducer } from './Reducers/PizzaReducers'
import { cartReducer } from './Reducers/CartReducers';
import { loginUserReducer, registerUserReducer } from './Reducers/UserReducers';
import { getUserOrdersReducer, placeOrderReducer } from './Reducers/OrderReducers';

const finalReducer = combineReducers({
    getAllPizzaReducer: getAllPizzaReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    placeOrderReducer: placeOrderReducer,
    getUserOrdersReducer: getUserOrdersReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null




const initialState = {
    cartReducer: {
        cartItems: cartItems
    },
    loginUserReducer: {
        currentUser: currentUser
    }
}

const composeEnhacers = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhacers(applyMiddleware(thunk)))

export default store