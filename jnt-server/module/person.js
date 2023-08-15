const db=require('../helper/db')
const express=require('express')
const router=express.Router()

router.post('/name',async (req,res)=>{
    console.log(req.body);
    const {name,id}=req.body
    const sql='update tour.tour_user set user_name=? where id=?'
    db.query(sql,[name,id],(err,data)=>{
        console.log(data);
       if(err){
        res.send({code:-1,message:err})
       }else{
        if(data.changedRows>0){
            res.send({code:200,message:'更改成功!',data})
        }else{
            res.send({code:-1,message:'更改失败'})
        }
        
       }
    })
})

router.post('/gender',async (req,res)=>{
    console.log(req.body);
    const {sex,id}=req.body
    const sql='update tour.tour_user set user_sex=? where id=?'
    db.query(sql,[sex,id],(err,data)=>{
        console.log(data);
       if(err){
        res.send({code:-1,message:err})
       }else{
        if(data.changedRows>0){
            res.send({code:200,message:'更改成功!',data})
        }else{
            res.send({code:-1,message:'更改失败'})
        }
        
       }
    })
})
module.exports=router