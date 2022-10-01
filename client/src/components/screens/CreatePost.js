import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import M from 'materialize-css';


function CreatePost() {
  const [title,setTitle] = useState("");
  const [body,setBody] = useState("");
  const [image,setImage] = useState("");
  const [url,setUrl] = useState("");
  const navigate = useNavigate();
 
  useEffect(()=>{
    if(url){
      fetch("/createpost",{
          method:"post",
          headers: {
              "Content-Type":"application/json",
              "Authorization": "Bearer "+localStorage.getItem("jwt")
          },
          body:JSON.stringify({
              title:title,
              body:body,
              pic:url
          })
      }).then(res=>res.json)
      .then(data=>{ 
          console.log(data);
          if(data.error){
            M.toast({html: data.error, classes:"#b71c1c red darken-4"})
          }
          else{
            M.toast({html:"Successully Post Created", classes:"#43a047 green darken-1"})
          }
        }).catch(err=>{
          console.log(err)
        })
  }},[body, navigate, title, url])


  
  const postDetails= ()=>{
    const data = new FormData();
    data.append("file",image);
    data.append("upload_preset","socialnetworksite");
    
    fetch("https://api.cloudinary.com/v1_1/socialnetworkcloud/image/upload/",{
    method:"post",
    body:data })
    .then(res=>res.json())
    .then(data=>{
         //console.log(data);
         setUrl(data.url);
    })
    .catch(err=>{
        console.log(data);
    })
}
  return (
    <div className="card input-field " style={{
        maxWidth:"500px",
        margin:"30px auto",
        padding:"20px",
        itemAlign:"center"
    }}>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" /> 
     
        <input type="text" value={body} onChange={(e)=>setBody(e.target.value)} placeholder="Description" /> 


    <div action="#">
    <div className="file-field input-field">
      <div className="btn indigo darken-4 z-depth-3">
        <span>+ Select File</span>
        <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
      </div> 
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" />
      </div>
    </div>
  </div>
  <Link to="/SignIn"><button className="btn  green darken-4 w-100 z-depth-3" onClick={()=>postDetails()} >Upload Post</button></Link>
    </div>
  )
}

export default CreatePost

