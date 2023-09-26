const express= require('express');
const router = express.Router();
const path=require('path')

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','index.html'))
})

router.post('/',(req,res)=>{
    const number1= +(req.body.v1);
    const number2= +(req.body.v2);
    const result= number1+number2
    res.send(`The Sum is ${result}
            <br>
            <a href="/calculate">Calculate</a>
            <br>
            <a href="/BMI">BMI</a>`);
})

module.exports={
    router
}