import { todoReducer } from './todoReducer';
import { useReducer } from './useReducer';
import {combineReducers} from 'redux'



export const rootReducer =  combineReducers({
    user:useReducer,
    todo:todoReducer
})

export type RootState= ReturnType<typeof rootReducer>