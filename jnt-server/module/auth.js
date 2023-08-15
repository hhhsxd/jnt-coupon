const db=require('../helper/db.js')
const express=require('express')
const router=express.Router()
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const crypt=require('crypt')
function generateSecretKey(length){
    return crypt.randomBytes(length).toString('hex')
}
// console.log(db.query)
router.post('/login', async (req,res)=>{
    const loginInfo=req.body
    const phone=loginInfo.phone
    const pwd=loginInfo.pwd
    console.log(loginInfo)
    const sql='select * from tour.tour_user where user_phone=?'
   db.query(sql,phone,(err,data)=>{
        if(err){
            console.log(err);
            res.send(err)
        }else{
            console.log(data)
            if(data.length==0){
                res.send({code:-1,msg:'该手机号未注册！'})
            }else {
                console.log(data)
                const passwordInput=data[0].user_pwd
                bcrypt.compare(pwd,passwordInput,(err,ismatch)=>{
                    if(err){
                        res.send({code:-1,message:'出错啦'})
                    }else{
                            const playload={user:phone}
                            const secretKey=generateSecretKey(32)
                            const token=jwt.sign(playload,secretKey)
                             res.set('Authorization',`Bearer ${token}`)
                             res.setHeader("Access-Control-Expose-Headers","Authorization")
                            res.send({code:200,message:'登录成功！',data})
                    }
                    
                })
            }
        }
    })
}) 

router.post('/sign',async (req,res)=>{
    const phone=req.body.phone
    const salt=await bcrypt.genSalt(10)
    const pwd=await bcrypt.hash(req.body.pwd,salt)
    const firstSql='select * from tour.tour_user where user_phone=?'
    db.query(firstSql,phone,(err,data)=>{
        if(err){
            res.send({code:'500',message:'something wrong'})
        }else{
            if(data.length){
              return  res.send({code:'500',message:'手机号已被注册，请直接登录'})
            }else{
                const sql=`insert into tour.tour_user (user_phone,user_pwd) values (?,?)`
              db.query(sql,[phone,pwd],(err,data)=>{
                if(err){
                    console.log(err+'ERROR')
                    res.send({code:'500',data:'',message:'注册失败'})
                } else{
                
                console.log(data+'there is');
                res.send({code:'200',data:'',message:'注册成功'})
                }
    })
            }
        }
    })
    

})
module.exports=router