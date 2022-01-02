const express = require('express')
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const cors = require('cors')
require('dotenv').config()

const app = express()
const port =  process.env.PORT || 3002;

// MiddleWare
app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fwb1h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const run = async () => {
    try{
        await client.connect()
        console.log("Database Connected!")
    
    }
    catch{

    }
}
run().catch(console.dir)

// Initilization
app.get('/', (req, res) => {
  res.send('Server Running...')
})
// initialization Console
app.listen(port, () => {
  console.log("Server Running on port", port)
})