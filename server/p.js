const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

//middleware
app.use(cors())
app.use(express.json())


//jwt related api
app.post('/jwt', async(req, res)=>{
  const user = req.body;
  const token = jwt.sing(user, process.env.ACCESS_TOKEN_SECRET,{
    expiresIn: '1h'
  })  
  res.send({token})
})



 const verifyToken = (req, res, next) => {
   //console.log('inside verify token', req.headers.authorization);
   if (!req.headers.authorization) {
     return res.status(401).send({ message: 'Unauthorized access' });
   }
   const token = req.headers.authorization.split(' ')[1];
   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
     if (err) {
       return res.status(403).send({ message: 'Forbidden access' });
     }
     req.decoded = decoded;
     next();
   });
 };
 
 const verifyAdmin = (req, res, next) =>{
    if(!req.headers.authorization){
        return res.status(403).send({message: 'unauthorized access'});
    }
    const token = req.headers.authorization.split('')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) =>{
        if(err){
            return res.status(403).send({ message: 'Forbiden access'});
        }
        req.decoded = decoded;
        next();
    })
 }

app.listen(port, ()=>{
    console.log(`birstors server is runing`)
})