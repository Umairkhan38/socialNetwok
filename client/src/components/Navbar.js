import React, { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { userContext } from '../App';


const RenderList=()=>{
  const{state,dispatch}=useContext(userContext);
  const navigate=useNavigate();
  if(state){
    return ([
      <li key ="{Home}"><Link  to="/">Home</Link></li>,
      <li key ="{profile}"><Link  to="/Profile">Profile</Link></li>,
      <li key="{CreatePost}"><Link  to="/CreatePost">CreatePost</Link></li>,
      <li key="{btn}"><button className="btn #f44336 red" style={{marginRight:"5px "}} onClick={()=>{localStorage.clear();
                dispatch({type: "CLEAR"});
                navigate('/SignIn');
            }}>Sign Out</button>
            </li>,


    ])
  }else{
   return([ <li key="{signIn}"><Link to="/SignIn">SignIn</Link></li>,
    <li key="{SignUp}"><Link to="/SignUp">SignUp</Link></li>
   ])
  }
}

function Navbar() {
  return (
    <nav>
    <div className="nav-wrapper indigo darken-4 z-depth-3">
      <div style={{cursor:"pointer"}} className="brand-logo left">QuickChat.com</div>
      <ul id="nav-mobile" className="right">
      {RenderList()}
      </ul>
    </div>
  </nav>

  )
}

export default Navbar


