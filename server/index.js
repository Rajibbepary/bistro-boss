

app.get('/users', async(req, res) =>{
    const result = await userCollection.find().toArray();
    res.send(result)
   })


   app.get('user', async()=>{
    const result = await userCollection.find().toArray();
    res.send(result);
   })
 app.get('/users/admin/:email', async(req, res)=>{
  const email = req.params.email;
  if(email !== req.decoded.email){
         return res.status(403).send({message: 'unauthorized access'})
   }
  const query = {email: email};
   const user = await userCollection.findOne(query);
  let admin = false;
   if(user) {
     admin = user?.role === 'admin';
  }
   res.send({ admin})
 })


  app.post('/users', async(req, res) =>{
    const user = req.body;
     const query = {email: user.email}
    const existingUser = await userCollection.findOne(query)
    if(existingUser){
      return res.send({ message: 'user already exists', insertedId: null})
    }
    const result = await userCollection.insertOne(user);
   res.send(result)
  })