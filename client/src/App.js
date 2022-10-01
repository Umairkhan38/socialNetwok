import React, { createContext, useReducer,useEffect, useContext } from "react";
import './App.css';
import Navbar from './components/Navbar' ;
import {BrowserRouter , Route , Routes,useNavigate} from 'react-router-dom';
import Home from "./components/screens/Home";
import SignIn from "./components/screens/SignIn";
import SignUp from "./components/screens/SignUp";
import Profile from "./components/screens/Profile";
import CreatePost from "./components/screens/CreatePost";
import { initialState,reducer } from "./reducers/UserReducer";

export const userContext=createContext();

const Routing=()=>{
  const navigate=useNavigate()
  const{state,dispatch}=useContext(userContext);
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("user"));
    if(user){
      dispatch({type:"USER",payload:"user"})
      navigate("/")
    }else{
      navigate("/SignIn") 
    }
  },[])
  return(
    <Routes>   
    <Route path='/' element={<Home />} />
    <Route path='/SignIn' element={<SignIn />} />
    <Route path='/SignUp' element={<SignUp/>} />
    <Route path='/Profile' element={<Profile/>} />
    <Route path='/CreatePost' element={<CreatePost/>} />
    </Routes>   
  )
}

function App() {
const[state,dispatch]=useReducer(reducer,initialState);

  return (
    <userContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <Navbar />
    <Routing />
    </BrowserRouter>
    </userContext.Provider>
  
  );
}

export default App;

