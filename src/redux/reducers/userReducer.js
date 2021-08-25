import {ActionTypes} from '../constants/actionTypes';
const initialState=[]

const userReducer=(state=initialState,action)=>{
    switch (action.type){
        case ActionTypes.ALL_USERS :{
            return action.payload
        }
        case ActionTypes.ADD_USERS :{
            return [...state,action.payload]
        }
        case ActionTypes.UPDATE_USERS :{
            return [...state,action.payload]
        }
        default:{
            return [...state]
        }
    }
}

export default userReducer;