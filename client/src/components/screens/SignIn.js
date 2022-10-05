import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState,useContext } from 'react';
import {userContext} from '../../App.js';
import M from 'materialize-css';

function SignIn() {
    const navigate = useNavigate();
    const{state,dispatch}=useContext(userContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    const postData=()=>{//eslint-disable-next-line
      if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        M.toast({html: "Invalid Email Id", classes:"#b71c1c red darken-4"});
        return;
      }
        fetch("/signIn",{   //fetch(para1,para2)
        method: "post",
        headers: {
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          password,
          email
        })
      }).then(res=>res.json())
      .then(data=>{ 
        console.log(data);
        if(data.error){
          M.toast({html: data.error, classes:"#b71c1c red darken-4"})
        }
        else{
          localStorage.setItem("jwt",data.token)
          localStorage.setItem("user",JSON.stringify(data.user))
          dispatch({type:"USER" ,payload:data.user})
          M.toast({html:"Successully Signed In", classes:"#43a047 green darken-1"})
          navigate('/')
        }
      }).catch(err=>{
        console.log(err)
      })
    }

  


  return (
    <div>
      <div className="my-card">
      <div className="card auth-card input-field z-depth-4">
     < Link to="/"> <h3  className="center indigo-text text-darken-4">QuickChat</h3></Link >
      <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" placeholder="password"  value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button className="btn waves-effect  indigo darken-4 z-depth-3" onClick={()=>postData()} name="action" >Sign In</button>
      <h6><Link to="/SignUp" className="indigo-text text-darken-4" >Create a New Account ?</Link> </h6>
      </div>
      </div>
    </div>
  )
}


export default SignIn


