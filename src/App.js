import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Counter from './Components/Counter';
import Todos from './Components/Todos';
import { AUTH_LOGIN_FAILURE, AUTH_LOGIN_LOADING, AUTH_LOGIN_SUCESS } from './Redux/AuthReducer/action';
function App() {
  const[userEmail,setuserEmail]=useState("");
  const[userPassword,SetuserPassword]=useState("");
  const dispatch =useDispatch();
  const token = useSelector((store)=> store.AuthReducer.token)
  const IsAuth = useSelector((store)=> store.AuthReducer.IsAuth)
  const handelLogin=()=>{
    if(userEmail && userPassword)
    {
      const payload={
        email:userEmail,
        password:userPassword
      }
    
    dispatch(AUTH_LOGIN_LOADING())
      return axios.post("https://reqres.in/api/login",payload)
      .then((r)=>{dispatch(AUTH_LOGIN_SUCESS(r.data.token))})
     .catch((e)=>AUTH_LOGIN_FAILURE(e))
    }
  }
  return (
    <div className="App">
      <Counter/>
      <input type="email" placeholder="eve.holt@reqres.in" value={userEmail} onChange={(e)=>setuserEmail(e.target.value)}/>
      <br/>
      <input type="password" placeholder="password" value={userPassword} onChange={(e)=>SetuserPassword(e.target.value)}/>
      <br/>
      <button onClick={handelLogin}>Login</button>
      <h4>token: {token}</h4>
      {IsAuth? <Todos/>:""}
    </div>
  );
}

export default App;
