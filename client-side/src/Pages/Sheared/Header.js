import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOutUser } from '../../Actions/UserActions';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/UserContext';


const Header = () => {

    const cartState = useSelector(state => state.cartReducer)
    const userState = useSelector(state => state.loginUserReducer)
    const dispatch = useDispatch()
    const { currentUser } = userState


    const cartstate = useSelector(state => state.cartReducer)
    const cartItems = cartstate.cartItems

    let subTotal = cartItems.reduce((x, item) => x + item.price, 0)


    // google name
    const { user, logout } = useContext(AuthContext);
    console.log(user);
    const googleName = user?.displayName;


    // console.log(currentUser);
    return (
        <div className='w-full fixed t-0 z-10'>
            <div className="navbar bg-base-100 shadow-lg ">
                <div className="flex-1">
                    <Link to="/home" className="btn btn-ghost normal-case text-xl">Pizza Palace</Link>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end lg:mx-2 lg:px-2">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{cartState.cartItems.length}</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">{cartState.cartItems.length} Items</span>
                                <span className="text-xl font-semibold text-green-800">Subtotal: {subTotal}BDT</span>
                                <div className="card-actions">
                                    <Link to='/cart' className="btn bg-blue-500 shadow-lg shadow-blue-500/50  btn-block"> View Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end mx-2 px-2">

                        {currentUser ?
                            (<label tabIndex={0} className="btn btn-ghost ">{currentUser.name}</label>)
                            : (
                                <label tabIndex={0} className="btn btn-ghost ">
                                    <div>
                                        Log In
                                    </div>
                                </label>
                            )
                        }

                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            <li><Link to='/home'>Home</Link></li>
                            <li>
                                <Link to="/orders" className="justify-between">
                                    My Orders
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            {currentUser ? (<li><Link onClick={() => { dispatch(logOutUser()) }}>Logout</Link></li>) : (<li><Link to="/login">LogIn</Link></li>)}


                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;