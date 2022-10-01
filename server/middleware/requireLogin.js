import jwt from 'jsonwebtoken';
import { secretValue } from '../keys.js';

export const requireLogin=(req,res,next)=>{
    const {authorization}=req.headers;

    if(!authorization){
     return res.status(401).json({error:"You Must be Logged In!"});
    }

    const token=authorization.replace("Bearer ",",");
    jwt.verify(token,secretValue,(err,payload)=>{
        if(err){
        return res.status(401).json({error:"You Must be Logged In!"});       
        }
        const {_id} =payload;
    User.findById(_id).then(userdata=>{
        req.user = userdata;
        next();
    }) 
   
})
}
