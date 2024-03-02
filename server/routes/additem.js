var express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
var router = express.Router();
var bcrypt = require('bcrypt')

let saltRounds = 5;
let link = "http://localhost:5173"

const uri = "mongodb+srv://kushchoudhary8430:ForTesting8430@cluster-kc.js7vwme.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

router.post('/', async function (req, res, next) {
    console.log("Adding item")
    const item = req.body.item;
    const email = req.body.email;
    const quantity = req.body.quantity;
    console.log(email);

    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const db = client.db("e-commerce")
    const col = db.collection("users")

    await col.updateOne({email: email}, 
        {
            $addToSet: {cart: {item: item, quantity: quantity}}
        });
    console.log('Item Added');
    await client.close();
    res.send();
});

module.exports = router;
