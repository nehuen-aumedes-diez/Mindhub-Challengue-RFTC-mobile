import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const newUser = createAsyncThunk('newUser', async(data)=>{
    try{
        let res = await axios.post(`${BASE_URL}/auth/signup`,data)
        // console.log(res);
        if(res.data.id){
            return {success:true, response: data}
        } else {
            return {success:false, response: res.data.message}
        }
    } catch(error){
        console.log(error)
        return { success:false, response:'ocurrio un error'}
    }
})

const signIn = createAsyncThunk('signIn', async(data)=>{
    try{
        let res = await axios.post(`${BASE_URL}/auth/signin`,data)
        // console.log(res.data.response)
        return {
            success: true,
            response: res.data.response
        }
    }catch(error){
        return { success:false, response:error.response.data.message}
    }
})

const signOut = createAsyncThunk('signOut', async(token)=>{
        let headers = {headers: {'Authorization' : `Bearer ${token}`}}
    try{

        let res = await axios.put(`${BASE_URL}/auth/signout`,null, headers)
        console.log(res.data)
        return {
            success: true,
            response: res.data.message
        }
    }catch(error){
        return { success:false, response:error.response.data.message}
    }
})

const relogin = createAsyncThunk('relogin', async(token)=>{
    let headers = {headers: {'Authorization' : `Bearer ${token}`}}
    try{
        let res = await axios.post(`${BASE_URL}/auth/token`,null, headers)
        console.log(res.data.response)
        return {
            success: true,
            response: {
                user: res.data.response,
                token
            }
        }
    }catch(error){
        return { success:false, response:error.response.data.message}
    }
})

const userActions= {
    newUser,
    signIn,
    signOut,
    relogin
    
}

export default userActions