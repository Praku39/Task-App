import axios from '../config/config';
import {ActionTypes} from '../constants/actionTypes';
export const setUsers=(data)=>{
    return {
        type:ActionTypes.ALL_USERS,
        payload:data
    }
}

export const startSetUsers=()=>{
    return (dispatch)=>{
        axios.get('/posts')
        .then(response=>{
           dispatch(setUsers(response.data))
        })
    }
}


export const addUser=(data)=>{
    return{
        type: ActionTypes.ADD_USERS,
        payload:data
    }
}

export const addUserApi=(data)=>{
    return (dispatch)=>{
        axios.post('https://jsonplaceholder.typicode.com/posts',data)
.then(response=>{
    if(response.data.hasOwnProperty('errors')){
        console.log("opps something went wrong");
    }else{
        dispatch(addUser(response.data))
    }
})
    }
}

export const editUser=(data)=>{
    return{
        type: ActionTypes.UPDATE_USERS,
        payload:data
    }
}

export const editUserApi=(data)=>{
    return (dispatch)=>{
        axios.put(`https://jsonplaceholder.typicode.com/posts/${data.id}`,data)
.then(response=>{
    if(response.data.hasOwnProperty('errors')){
        console.log("opps something went wrong");
    }else{
        dispatch(addUser(response.data))
    }
})
    }
}



