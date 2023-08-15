
const mysql=require('mysql')
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'000279',
    database:'tour'
 })
 db.connect((err)=>{
    if(err){
           console.log(err)
           return
    }
    console.log("connect the db!");
   
 
 })
 module.exports=db