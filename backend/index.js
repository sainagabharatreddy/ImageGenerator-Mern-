const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const logindetails = require('./models/model')

const server = express();

server.use(express.json()); 
server.use(cors());

const port = process.env.PORT || 3005;

mongoose.connect('mongodb://127.0.0.1:27017/project1');

server.post('/', (req, res)=>{

    const { email, password } = req.body;

     logindetails.findOne({ email:email })
     .then( result=> {
        if(result)
        {
            if(result.password === password)
            {
                res.json('success ful');
            }
            else{
                res.json('wrong password');
            }
         
        }
        else{
            res.json('no user found');
        }
     })
     })


server.post('/signup', (req , res)=>{

    logindetails.create(req.body)
    .then(data=>res.json(data))
    .catch(err=>res.json(err))

});




server.listen(port, ()=>{
    console.log(`server is running on port :${port}`);
})
