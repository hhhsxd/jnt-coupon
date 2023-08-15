const { log } = require('console')
const db=require('../helper/db.js')
const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    console.log(req.body);
    const userId=req.data
    const sql='select * from tour.tour_user where id=?'
    db.query(sql,[userId],(err,data)=>{
        if(err){
            console.log(err);
            res.send({code:-1,message:'出错啦'})
        }else{
           if(data.length>0){
            res.send({code:0,data,message:'获取用户信息成功！'})
           }else{
            res.send({code:-1,message:'获取失败'})
           }
                
        }
    })

})
module.exports=router