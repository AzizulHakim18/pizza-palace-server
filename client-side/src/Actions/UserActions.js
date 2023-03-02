import axios from "axios"
import { toast } from "react-hot-toast"



export const registerUser = (user) => async dispatch => {
    dispatch({ type: 'USER_REGISTER_REQUEST' })

    try {
        const response = await axios.post('https://pizza-server-theta.vercel.app/api/users/register', user)
        dispatch({ type: "USER_REGISTER_SUCCESS" })
        toast.success('Successfully registerd')
        console.log(response);
    } catch (error) {
        dispatch({ type: 'USER_REGISTER_FAILED', payload: error })
    }
}
export const loginUser = (user) => async dispatch => {
    dispatch({ type: 'USER_LOGIN_REQUEST' })

    try {
        const response = await axios.post('https://pizza-server-theta.vercel.app/api/users/login', user)
        dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data })
        localStorage.setItem('currentUser', JSON.stringify(response.data))
        window.location.href = '/'
        console.log(response);
    } catch (error) {
        dispatch({ type: 'USER_LOGIN_FAILED', payload: error })
    }
}


export const logOutUser = () => dispatch => {
    localStorage.removeItem('currentUser')
    toast.success("Log out successfully")
    window.location.href = '/login'
}