import express from "express";
import mongoose from "mongoose";
import {requireLogin}  from "../middleware/requireLogin.js";
import "../models/post.js";

const routerPost = express.Router();
const Post = mongoose.model("Post");


routerPost.post('/createpost',requireLogin,(req,res)=>{
   const {title,body,pic} = req.body;
   console.log(title,body,pic);
   if(!title || !body || !pic){
    return res.status(422).json({error:"Please add all fields"});
   }
   
   req.user.password = undefined;
   const post = new Post({
    title:title,
    body:body,
    photo:pic,
    postedBy:req.user
   })
   post.save().then(result=>{
    res.json({post:result})
   })
   .catch(err=>{
    console.log(err)
   })
})

 

routerPost.get("/allpost",requireLogin,(req,res)=>{
   Post.find()
   .populate([{ path: "postedBy", strictPopulate: false }])
   .populate("postedBy","_id name")
   .then(posts=>{
      res.json({posts})
   })
   .catch(err=>{
      console.log(err)
     })
})
 

routerPost.get('/mypost',requireLogin,(req,res)=>{
   Post.find({postedBy:req.user._id})
   .populate([{ path: "postedBy", strictPopulate: false }])
   .populate("postedBy","_id name")
   .then(mypost=>{
      res.json({mypost})
   })
   .catch(err=>{
      console.log(err)
     })
})
 

routerPost.put('/like',requireLogin,(req,res)=>{
   Post.findByIdAndUpdate(req.body.postId,{
      $push:{likes:req.user._id}
   },{
      new:true
   }).exec((err,result)=>{
         if(err)
            return res.status(422).json({error:err})
         else
            res.json(result)
   })
})


routerPost.put('/unlike',requireLogin,(req,res)=>{
   Post.findByIdAndUpdate(req.body.postId,{
      $pull:{likes:req.user._id}
   },{
      new:true
   }).exec((err,result)=>{
         if(err)
            return res.status(422).json({error:err})
         else
            res.json(result)
   })
})


export default routerPost;



