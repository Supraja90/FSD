const exp=require('express')
const mongoose=require('mongoose')
const url='mongodb://localhost/cbit'
mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection
const app=exp();
app.use(exp.json())
const r =require('./router/routeralien')
app.use('/student',r)
con.on('open',function(){
    console.log("welcome")
})
app.listen(9000,()=>{
    console.log("server connected")
})