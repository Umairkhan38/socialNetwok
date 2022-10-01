import React from 'react'
let profile =require('../../assets/profile.JPG') ;
function Profile() {
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
          <h4>Umair Khan</h4>
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
        <img className="item" src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsJTIwYm95fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="gallerypic" />
        <img className="item" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="gallerypic" />

        <img className="item" src="https://images.unsplash.com/photo-1517466879096-b1cc68d6d983?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsJTIwYm95fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="gallerypic" />
        <img className="item" src="https://images.unsplash.com/photo-1552060405-f2081b6e7951?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhhbmRzb21lJTIwYm95fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="gallerypic" />
        <img className="item" src="https://media.istockphoto.com/photos/durdle-door-dorset-beach-picture-id501707966?b=1&k=20&m=501707966&s=170667a&w=0&h=-rpJ5XQM1xU0Qv4ZWKgcPYoZct_MBo40v3dDZDcWxVM=" alt="gallerypic" />
        <img className="item" src="https://media.istockphoto.com/photos/weve-made-it-all-this-way-i-am-proud-picture-id904172104?b=1&k=20&m=904172104&s=170667a&w=0&h=cpH1h5ENopSwP2hB-zlAxeg3Gry9KkcBReSsBV1zyzQ=" alt="gallerypic" />
        <img className="item" src="https://media.istockphoto.com/photos/mountain-landscape-ponta-delgada-island-azores-picture-id944812540?b=1&k=20&m=944812540&s=170667a&w=0&h=l_ZBODE63CMXmjSnmBG4QfpN9nh-84FS-V2oLVLerPg=" alt="gallerypic" />
        <img className="item" src="https://images.unsplash.com/photo-1642018175615-2b5114877920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwc2NlbmFyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="gallerypic" />
        <img className="item" src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="gallerypic" />

</div>


    </div>
    
  )
}

export default Profile