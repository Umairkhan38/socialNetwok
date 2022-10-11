import React, { useEffect, useState, useContext } from "react";
import { userContext } from "../../App";
import M from 'materialize-css';



function Home() {
  const [data, setData] = useState([]);
  const { state, dispatch } = useContext(userContext);
  useEffect(() => {
    fetch("/allpost", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result.posts);
       
      });
  }, []);

  const likePost = (id) => {
    fetch("/like", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData=
        data.map(item=>{       
          if(item._id==result._id){
            return result
          }else{
            return item;
          }
        })
          setData(newData);
        })  
  };


  const unlikePost = (id) => {
    fetch("/unlike", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newData=
        data.map((item)=>{       
          if(item._id===result._id){
            return result;
          }else{
            return item;
          }
        })
          setData(newData);
        })  
    }


  
  return (
    <div className="home">
      {data.map((item,i) => {
        return (
          <div className="card home-card">
            <div className="toping" style={{display:"flex"}}>
            <h5 key="{item.postedBy}">{item.postedBy.name}</h5>
            <i className="material-icons" style={{marginLeft:"320px",fontSize:"2.1rem",marginTop:"15px" }}>more_horiz</i>
            </div>
            <div className="card-image">
              <img key="{item.photo}"
                src={item.photo} alt="pic"
              />
            </div>
            <div className="card-content">
        {item.likes.includes(state._id) ? (
<i className="material-icons" onClick={() => {unlikePost(item._id);}}>thumb_down</i>) : (
<i className="material-icons" onClick={() => {likePost(item._id);}}>thumb_up</i>
)}


              <i className="material-icons" style={{marginLeft:"12px",fontSize:"2rem" }}>
                 chat 
              </i>
              <i className="material-icons" style={{ color: "blue",marginLeft:"10px",fontSize:"2rem"  }}>
                send
              </i>
              <i className="material-icons" style={{ color: "black",marginLeft:"250px",fontSize:"2rem"  }}>
              turned_in
              </i>


              <p key={i} style={{marginTop:"3px"}}><b>{item.likes.length} likes</b></p>
              <h6 key={i}><b>{item.title}</b></h6>
              <p key="{item.body}"> {item.body}</p>
              <div className="comment" style={{display:"flex"}}>
        <i style={{fontSize:"1.69rem",marginTop:"11px"}} className="material-icons">mood</i>
              <input  style={{fontSize:"1rem",marginLeft:"7px",border:"none"}} type="text" placeholder="Add a comment..." />
              <h6 style={{color:"#039be5",cursor:"pointer"}}><b>Post</b></h6>
              </div>

            </div>
          </div>
        );
      })
      }
    </div>
  );
}

export default Home;

