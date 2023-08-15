const express=require('express')
const cors=require('cors')
const server=express()

server.use((req,res,next)=>{
    res.set({
        'Access-Control-Allow-Origin':"*",
        'Access-Control-Allow-Headers':'Origin,X-Requested-with,Content-Type,Accept,Access-Control-Expose-Headers,Platform,Token,Uid',
        'Access-Control-Allow-Methods':'PUT,POST,GET,OPTIONS,HEAD'
    })
    next()
})
server.use(express.json())
//这里为false返回的键值对中的值是string或array
server.use(express.urlencoded({extended:false}))
server.use(cors())

server.use('/tour/auth',require(__dirname+'/module/auth.js'))
server.use('/tour/user',require(__dirname+'/module/user.js'))
server.use('/tour/person',require(__dirname+'/module/person.js'))

server.get('/',(req,res)=>{
    res.send('Hello world')
})
server.listen(3000,()=>{
    console.log("this is listen at 3000")
})