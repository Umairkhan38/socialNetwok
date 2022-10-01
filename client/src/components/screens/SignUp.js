import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import M from 'materialize-css';

function SignUp() {
  const navigate = useNavigate();
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //creating network request
  const postData=()=>{  //enlsit-disbled-next
    if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){
      M.toast({html:"Invalid Email Id",classes:'#b71c1c red darken-4'});
      return;
    }


    fetch("/signUp",{
      method: "post",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        password,
        email
      })
    }).then(res=>res.json())
    .then(data=>{ 
      if(data.error){
        M.toast({html: data.error, classes:"#b71c1c red darken-4"})
      }
      else{
        M.toast({html:data.message, classes:"#43a047 green darken-1"})
        navigate('/SignIn')
      }
    }).catch(err=>{
      console.log(err)
    })
  }


  return (
    
    <div>
      <div className="my-card">
        <div className="card auth-card input-field  z-depth-4">
          <Link to="/"> <h3 className="center indigo-text text-darken-4 ">QuickChat</h3> </Link>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="password" value={password}
            onChange={(e) => setPassword(e.target.value)} />

          <button className="btn waves-effect  indigo darken-4  z-depth-3" type="submit" onClick={()=>postData()}name="action">Sign Up</button>
          <h6><Link to="/SignIn" className="indigo-text text-darken-4" >Already have an Account ?</Link> </h6>
        </div>
      </div>
    </div>
  )
}

export default SignUp

