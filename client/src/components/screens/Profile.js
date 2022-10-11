import {React,useEffect,useState,useContext} from 'react'
import{ userContext} from '../../App.js';
let profile =require('../../assets/profile.JPG') ;


function Profile() {
  const[myPost,setmyPost]=useState([]);
  const{state,dispatch}= useContext(userContext);
  
  useEffect(()=>{
    fetch('/mypost',{
      headers:{
        Authorization:"Bearer "+localStorage.getItem("jwt")
      }
    }).then((res)=>res.json())
    .then((result) => {
      console.log(result);
      setmyPost(result.mypost);
    })

  },[]);

  return (

    <div style={
      {
        maxWidth:"550px",
        margin:"0px auto",

      }
    }>
        <div
        style={{
          display:"flex",
          justifyContent:"space-evenly",
          margin:"18px 0px",
          borderBottom:"1px solid grey"

        }
      }
        >
        <div>
        <img style={
          {
            width:"160px",
            height:"160px",
            borderRadius:"100px",
            objectFit:"cover"
          }
         }
          src={profile} alt="profile pic"  />

        </div>

        <div>
          <h4>{state.name}</h4>
          <div 
          style={
            {
              display:"flex",
              justifyContent:"space-around",
              width:"115%"
            }
          }>
            <h5>50 Posts</h5>
            <h5>50k Followers</h5>
            <h5>12 Following</h5>
          </div>
        </div>

      </div>

      <div className="gallery">
        
        {myPost.map((item)=>{
         return <img className="item" src={item.photo} alt={item.title} />
        })}

</div>


    </div>
    
  )
}

export default Profile