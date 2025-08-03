// Import required modules
const express = require('express')
const app = express()
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');

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
    await client.connect();

    // Define database and collections
    const menuCollection = client.db('brstobossDB').collection('menu');
    const reviewCollection = client.db('brstobossDB').collection('reviews');

    // ===== Routes =====

    // Get all menu items
    app.get('/menu', async (req, res) => {
      const result = await menuCollection.find().toArray();
      res.send(result);
    });

    // Get all reviews
    app.get('/review', async (req, res) => {
      const result = await reviewCollection.find().toArray();
      res.send(result);
    });

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
