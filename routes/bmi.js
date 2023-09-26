const express= require('express');
const router = express.Router();
const path=require('path')

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','bmi.html'))
})

router.post('/',(req,res)=>{
    const weight= +(req.body.weight);
    const height= +(req.body.height);
    const heightCM= height/100
    const result= weight/(heightCM*heightCM)
    res.send(`Your BMI is: ${result}
            <br>
            <a href="/calculate">Calculate</a>
            <br>
            <a href="/BMI">BMI</a>`)
})

module.exports={
    router
}