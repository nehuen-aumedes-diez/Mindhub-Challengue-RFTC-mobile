import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userAction";
import AsyncStorage from '@react-native-async-storage/async-storage';

const {newUser, signIn, signOut, relogin} = userActions

const initialState = {
    perfiles: [],
    name:"",
    logged: false,
    token:""
}

const userReducer = createReducer(initialState, (builder)=>{
    builder
    .addCase(newUser.fulfilled, (state, action)=>{
        if(action.payload.success){
            return state.perfiles.push(action.payload.response)
        }
    })
    .addCase(signIn.fulfilled, (state, action)=>{
        console.log(action)
        const{success , response }= action.payload
        if(success){
            let {user, token} = response
            AsyncStorage.setItem('token', JSON.stringify({ token : {user:token}}))
            .catch(err=>console.log(err))
            let newState={
                ...state,
                name: user.name,
                logged: true,
                token: token
            }
            return newState
        } else{
            let newState={
                ...state,
                messagge: response
            }
            return newState
        }
    })
    .addCase(signOut.fulfilled, (state,action)=>{
        console.log(action);
        const{success , response }= action.payload
        if(success){
            localStorage.removeItem('token')
            let newState={
                ...state,
                name: "",
                logged: false,
                token: ""
            }
            return newState
        }else{
            let newState={
                ...state,
                messagge: response
            }
            return newState
        }
    })
   .addCase(relogin.fulfilled, (state, action)=>{
        // console.log(action)
        const{success , response }= action.payload
        if(success){
            let {user, token} = response
            let newState={
                ...state,
                name: user.name,
                logged: true,
                token: token
            }
            
            return newState
        } else{
            let newState={
                ...state,
                messagge: response
            }
            return newState
        }
    })
})


export default userReducer