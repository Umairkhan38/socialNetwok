import React, { useEffect, useState } from 'react';
import M from 'materialize-css';
import {useNavigate } from 'react-router-dom';

function CreatePost() {
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");
    const [image,setImage] = useState("");
    const [url,setUrl] = useState("");
    const navigate = useNavigate();
   
    useEffect(()=>{
      if(url){
        fetch('/createpost',{
            method:"post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                title:title,
                body:body,
                pic:url
            })
        }).then(res=>res.json)
        .then(data=>{ 
            if(data.error){
              // console.log("data.error:"+data)
              M.toast({html: "Not Posted", classes:"#b71c1c red darken-4"});
            }
            else{
              console.log("data:"+data)
              M.toast({html: "Posted", classes:"#43a047 green darken-1"});
              navigate("/");
            }
          }).catch(err=>{
            console.log(err)
          })
   }
  },[title,body,navigate,url])

    const postDetails= ()=>{
        const data = new FormData();
        data.append("file",image);
        data.append("upload_preset","socialnetworksite");
        
        fetch("https://api.cloudinary.com/v1_1/socialnetworkcloud/image/upload/",{
        method:"post",
        body:data 
        })
        .then(res=>res.json())
        .then(data=>{
            //  console.log(data);
             setUrl(data.url);
        })
        .catch(err=>{
            console.log(data);
        })
    }

  return (
    <div className='card input-field'
    style={{
        margin: "30px auto",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center"
    }}>
        <input 
        type="text" 
        placeholder='title'
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />
        <input 
        type="text" 
        placeholder='body'
        value={body}
        onChange={(e)=>setBody(e.target.value)}
        />
        <div className="file-field input-field">
            <div className="btn #1a237e indigo darken-4">
            <i style={{fontSize:"1.1rem"}} className="material-icons">add_to_photos</i> <span style={{fontSize:"1.3rem"}}> Select Image</span>
            
                <input 
                type="file" 
                onChange={(e)=>setImage(e.target.files[0])}
                />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
        </div>
        
        <button  style={{width:"100%",fontSize:"1.3rem"}} className="btn #2e7d32 green darken-3" onClick={()=>postDetails()}>     <i style={{fontSize:"1.2rem"}} className="material-icons">assignment</i> Upload Post</button>
    
    </div>
  )
}

export default CreatePost