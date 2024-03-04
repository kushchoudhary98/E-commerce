var express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
var router = express.Router();

const uri = "mongodb+srv://kushchoudhary8430:ForTesting8430@cluster-kc.js7vwme.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

router.put('/', async function (req, res, next) {
    console.log("Removing item")
    const item = req.body.item;
    const email = req.body.email;
    console.log(item);
    console.log(email);

    try{
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        const db = client.db("e-commerce")
        const col = db.collection("users")

        await col.updateOne({email: email}, 
            {
                $pull: {cart: {item: item}}
            });
        console.log('Item Removed');
        await client.close();
        res.send();
    }
    catch(err) {
        console.log('An error occured.');
    }
});

module.exports = router;
