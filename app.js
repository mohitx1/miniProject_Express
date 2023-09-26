const app= require('express')();
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const routes=require('./routes/routes')
const BMI=require('./routes/bmi')

const port=process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.use('/calculate', routes.router);
app.use('/BMI', BMI.router);

app.use('*',(req,res)=>{
    res.send(`<a href="/calculate">Calculate</a><br><a href="/BMI">BMI</a>`)
})

app.listen(port,() => console.log(`Server running on port: ${port}`));
