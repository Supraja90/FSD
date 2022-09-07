const mongoose=require('mongoose')
const s1=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    tech:{
        type:String,
        required:true
    },
    sub1:{
        type:Boolean,
        required:true,
        default:false
    }
})
module.exports =mongoose.model('s',s1)