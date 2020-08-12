import React,{useReducer,useContext} from 'react'
import axios from 'axios'
import {authReducer,State} from '../authReducer'
import '../auth.css'
import { Redirect } from 'react-router-dom'
import UserContext from '../../../context/userContext'

function Login(props) {
  const{stateA,disp}=useContext(UserContext)
  const {userName,email,password,error,isAuth,loading} =stateA;
   const dispatch =disp;

  const handleChange=(e)=>{
   dispatch({
     type:"field",
     [e.target.name]:e.target.value
   })
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    dispatch({type:"submit"})

    const options={
      body:{email,password},
      headers:{
        'Content-Type':'application/json'
      }
    }
    axios.post('http://localhost:5000/user/login',options,{withCredentials:'inculde'})
         .then((res)=>{
          dispatch({type:"success"})
          props.history.push('/home')
          })
         .catch((err)=> {
           console.log(err)
           dispatch({type:"error"})
          })

  }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          
          <input type="text" name="email" onChange={handleChange} 
          required value={email||''} placeholder="Email"/>

          <input type="text" name="password" onChange={handleChange} 
          value={password||''} placeholder="Password"/>

          <button disabled={loading} type="submit">
            {loading ? 'Logging in...' : 'Log in'}
          </button>

        </form>
      </div>  
    </div>
  )
}

export default Login;
