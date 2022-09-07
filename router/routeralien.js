const exp =require('express')
const router1=exp.Router()
const s=require('../model/modelalien')


router1.get('/',async(req,res)=>{ //get the data from database
    try{
        const a= await s.find()
        res.json(a)
    }catch(err)
    {
res.send("error"+err)
    }

})

router1.get('/:id',async(req,res)=>{  //get the data by id
    try{
        const a1= await s.findById(req.params.id)
        res.json(a1)
    }catch(err)
    {
res.send("error"+err)
    }

})

router1.patch('/:id',async(req,res)=>{   //to change the saved data
    try{
        const a= await s.findById(req.params.id)
        a.tech=req.body.tech
        const a1=a.save()
        res.json(a1)
    }catch(err)
    {
res.send("error"+err)
    }

})

router1.post('/',async (req,res)=>{ //to enter the new data
const x = new s({
    name: req.body.name,
    tech: req.body.tech,
    sub1: req.body.sub1
})
try {
    const x1 = await x.save()
    res.json(x1)
} catch (err) {
    res.send("Error" + err)
}
})
module.exports=router1