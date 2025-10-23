// Import required modules
const express = require('express')
const app = express()
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const stripe =require('stripe')(process.env.STRIPE_SECRET_KEY)
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// Set the server port
const port = process.env.PORT || 5000;

// ===== Middleware Setup =====
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// ===== MongoDB Connection URI =====
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.i8aog.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// ===== MongoDB Client Setup with API version =====
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// ===== Main Async Function to Connect to MongoDB and Define Routes =====
async function run() {
  try {
    // Connect the client to MongoDB server
   // await client.connect();

    // Define database and collections
    const userCollection = client.db('brstobossDB').collection('users');
    const menuCollection = client.db('brstobossDB').collection('menu');
    const reviewCollection = client.db('brstobossDB').collection('reviews');
    const cartCollection = client.db('brstobossDB').collection('carts');
    const paymentCollection = client.db('brstobossDB').collection('payments');
   
    
    // ===== Routes =====
    
    //jwt related api
    app.post('/jwt', async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1h'
      })
      res.send({ token });
    })
//middlewares


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

//use verify admin after verifyToken
const verifyAdmin = async(req, res, next) =>{
  const email = req.decoded.email;
  const query = {email: email};
  const user = await userCollection.findOne(query);
  const isAdmin = user?.role === 'admin';
  if(!isAdmin){
    return res.status(403).send({message: 'forbidden access'})
  }
  next();
}



   //user Related Api 
   app.get('/users', verifyToken, verifyAdmin, async (req, res) =>{
    const result = await userCollection.find().toArray();
    res.send(result)
   })

app.get('/users/admin/:email', verifyToken, async(req, res)=>{
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

//admin role change related Api

app.patch('/users/admin/:id', verifyToken, verifyAdmin, async (req, res)=>{
  const id = req.params.id;
  const filter = {_id: new ObjectId(id)};
  const updatedDoc = {
    $set: {
      role: 'admin'
    }
  }
  const result = await userCollection.updateOne(filter, updatedDoc)
  res.send(result);
})


app.delete('/users/:id', verifyToken, verifyAdmin, async (req, res) =>{
  const id = req.params.id;
  const query = {_id: new ObjectId(id)}
  const result = await userCollection.deleteOne(query);
  res.send(result);
})


    // Get all menu items
    app.get('/menu', async (req, res) => {
      const result = await menuCollection.find().toArray();
      res.send(result);
    });

    app.get('/menu/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await menuCollection.findOne(query);
      res.send(result)
    })


    app.post('/menu', async(req, res) =>{
      const item = req.body;
      const result = await menuCollection.insertOne(item);
      res.send(result)
    })

    app.patch('/menu/:id', async(req, res) =>{
      const item = req.body;
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const updatedDoc = {
        $set: {
          name: item.name,
          category: item.category,
          price: item.price,
          recipe: item.recipe,
          image: item.image
        }
      }
      const result = await menuCollection.updateOne(filter, updatedDoc)
      res.send(result)
    })

    app.delete('/menu/:id', verifyToken, verifyAdmin, async(req, res) =>{
      const id = req.params.id;
      const query = { _id: new ObjectId(id)}
     // const query = { _id: id }
      const result = await menuCollection.deleteOne(query);
      res.send(result);
    })


    // Get all reviews
    app.get('/review', async (req, res) => {
      const result = await reviewCollection.find().toArray();
      res.send(result);
    });

//carts collection
    app.get('/carts', async(req, res) =>{
      const email = req.query.email;
      const query = { email: email}
      const result = await cartCollection.find(query).toArray()
      res.send(result)
    })


app.post('/carts', async(req, res) =>{
  const itemId = req.body;
  const result = await cartCollection.insertOne(itemId);
  res.send(result);

})

app.delete('/carts/:id', async(req, res) =>{
  const id = req.params.id;
  const query = {_id: new ObjectId(id)}
  const result = await cartCollection.deleteOne(query);
  res.send(result);
})

//payment intent api

app.post('/creat-payment-intent', async (req, res) =>{
  const { price } = req.body;
  const amount = parseInt(price * 100);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: 'usd',
    payment_method_types: ['card']
  })

  res.send({
    clientSecret: paymentIntent.client_secret
  })

  })

app.get('/payments/:email', verifyToken, async (req, res) =>{
  const query = {email: req.params.email}
  if(req.params.email !== req.decoded.email){
    return res.status(403).send({message: 'forbidden access'})
  }
  const result = await paymentCollection.find(query).toArray()
  res.send(result)
}) 



  app.post('/payment', async(req, res) => {
    const payment = req.body;
    const paymentResult = await paymentCollection.insertOne(payment);

    const query = {_id: {
      $in: payment.cartIds.map(id => new ObjectId(id))
    }}
    const deleteResult = await cartCollection.deleteMany(query);

    res.send(paymentResult, deleteResult)
  })

  //stats or analytics

  app.get('/admin-stats', verifyToken, verifyAdmin, async (req, res) =>{
    const users = await userCollection.estimatedDocumentCount();
    const menuItems = await menuCollection.estimatedDocumentCount();
    const orders = await paymentCollection.estimatedDocumentCount();

    //this is not the best way
   // const payments = await paymentCollection.find().toArray();
   // const revenue = payments.reduce((total, payment) => total + payment.price, 0);

   const result = await paymentCollection.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: {
          $sum: '$price'
        }
      }
    }
   ]).toArray();

   const revenue = result.length > 0 ? result[0].totalRevenue : 0;
   res.send({
      users,
      menuItems,
      orders,
      revenue
    })
  })


  //ussing aggregate pipeline

  app.get('/order-stats',  async (req, res) => {
  const result = await paymentCollection.aggregate([
    {
      $unwind: '$menuItemIds'
    },
    {
      $lookup: {
        from: 'menu',
        localField: 'menuItemIds',
        foreignField: '_id',   // fixed typo
        as: 'menuItems'
      }
    },
    {
      $unwind: '$menuItems'
    },
    {
      $group: {
        _id: '$menuItems.category',
        quantity: { $sum: 1 },
        revenue: { $sum: '$menuItems.price' }
      }
    },
    {
      $project: {
        _id: 0,
        category: '$_id',
        quantity: 1,
        revenue: 1
      }
    }
  ]).toArray();

  res.send(result);
});

  ///
    // Ping MongoDB to confirm successful connection
    await client.db("admin").command({ ping: 1 });

  } finally {
    // Optional: Close the connection when finished
    // await client.close();
  }
}

// Run the async function and catch errors
run().catch(console.dir);

// ===== Default Route =====
app.get('/', (req, res) => {
  res.send('boss is sitting');
});

// ===== Start the Server =====
app.listen(port, () => {
  console.log(`bistro boss is sitting on port ${port}`);
});
