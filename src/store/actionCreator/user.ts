import axios from 'axios';
import { Dispatch } from 'react';
import { UserAction, UserActionTypes } from './../../types/user';



export const fetchUser = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type:UserActionTypes.FETCH_USERS})
            const responce = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch({type:UserActionTypes.FETCH_USERS_SUCCESS,payload: responce.data})
        } catch (error) {
            dispatch({type:UserActionTypes.FETCH_USERS_ERROR,payload:'error has been detected'})
        }
    } 
}