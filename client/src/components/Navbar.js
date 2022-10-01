import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import { userContext } from '../App';


const RenderList=()=>{
  const{state,dispatch}=useContext(userContext);
  if(state){
    return ([
      <li><Link to="/Profile">Profile</Link></li>,
        <li><Link to="/CreatePost">CreatePost</Link></li>,
        <li><Link to="/Logout">Logout</Link></li>

    ])
  }else{
   return([ <li><Link to="/SignIn">SignIn</Link></li>,
    <li><Link to="/SignUp">SignUp</Link></li>
   ])
  }
}

function Navbar() {
  return (
    <nav>
    <div className="nav-wrapper indigo darken-4 z-depth-3">
      <Link to="/" className="brand-logo left">QuickChat.com</Link>
      <ul id="nav-mobile" className="right">
      {RenderList()}
      </ul>
    </div>
  </nav>

  )
}

export default Navbar