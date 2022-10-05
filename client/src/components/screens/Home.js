import React, { useEffect, useState } from "react";
// import "./Home.css";


function Home() {
  const [data, setData] = useState([]);
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
  return (
    <div className="home">
      {data.map((item,i) => {
        return (
          <div className="card home-card">
            <h5 key="{item.postedBy}">{item.postedBy.name}</h5>
            <div className="card-image">
              <img key="{item.photo}"
                src={item.photo} alt="pic"
              />
            </div>
            <div className="card-content">
              <i className="material-icons" style={{ color: "red",fontSize:"2rem"  }}>
                favorite
              </i>

              <i className="material-icons" style={{marginLeft:"10px",fontSize:"2rem" }}>
                question_answer
              </i>
              <i className="material-icons" style={{ color: "blue",marginLeft:"10px",fontSize:"2rem"  }}>
                send
              </i>


              <h6 key={i}>{item.title}</h6>
              <p key="{item.body}"> {item.body}</p>
              <input type="text" placeholder="add a comment" />
            </div>
          </div>
        );
      })
      }
    </div>
  );
}

export default Home;

