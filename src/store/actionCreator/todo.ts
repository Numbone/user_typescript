import { TodoAction, TodoActionTypes } from './../../types/todo';
import axios from 'axios';
import { Dispatch } from 'react';





export const fetchTodo = (page=1,limit=10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type:TodoActionTypes.FETCH_TODO })
            const responce = await axios.get('https://jsonplaceholder.typicode.com/todos',{
                params:{_page:page,_limit:limit}
            })
            dispatch({type:TodoActionTypes.FETCH_TODO_SUCCESS,payload:responce.data })
        } catch (error) {
            dispatch({type:TodoActionTypes.FETCH_TODO_ERROR,payload:'error has been catched' })
        }
    }
}
export const setTodoPage =(page:number):TodoAction=>{
    return {type:TodoActionTypes.SET_TODO_PAGE,payload:page}
}