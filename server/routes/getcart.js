var express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
var router = express.Router();
var axios = require('axios');

let link = "http://localhost:5173"

const uri = "mongodb+srv://kushchoudhary8430:ForTesting8430@cluster-kc.js7vwme.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function calculatePrice(cart) {
    let total = 0.0;
    cart.map((item) => {
        total = total + item.price;
    })
    return total;
}

router.post('/', async function (req, res, next) {
    console.log("Getting cart")
    const email = req.body.email;
    console.log(email);

    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const db = client.db("e-commerce")
    const col = db.collection("users")

    let cartitems = [];

    await col.findOne({ email: email }).then(user => {
        if (user == null) {
            console.log("User not found.")
            res.send();
        }
        else {
            cartitems = user.cart;
        }
    })

    let cart = [];
    for (let i = 0; i < cartitems.length; i++) {
        await axios.get(`https://fakestoreapi.com/products/${cartitems[i].item}`).then(
            res => {
                cart.push(res.data);
            }
        )
    }

    let price = await calculatePrice(cart);
    console.log(price);
    res.send({price: price, cart});
});

module.exports = router;
