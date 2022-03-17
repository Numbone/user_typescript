import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { useAction } from '../hooks/useAction';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { fetchUser } from '../store/actionCreator/user';

const UserList:React.FC= () => {
    const {users,error,loading}= useTypeSelector(state=>state.user)
    const {fetchUser}=useAction()
    useEffect(()=>{
       fetchUser()
    },[])

    if(loading){
        return  <h1>Loading</h1>
    }
    if(error){
        return <h1>{error}</h1>
    }


    return (
        <div>
            {users.map(user=>
                <div>
                    {user.id}.{user.name}
                </div>)}
        </div>
    );
};

export default UserList;