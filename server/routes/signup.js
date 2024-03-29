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

async function addUser(firstname, lastname, email, passwd, res) {
    await bcrypt.hash(passwd, saltRounds, async (err, encrypted) => {
        if (err) {
            console.log("error hashing: ", err);
            res.send({status: 'error'});
            return;
        }
        try {
            await client.connect();
            await client.db("admin").command({ ping: 1 });
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
            const db = client.db("e-commerce")
            const col = db.collection("users")

            const user = {
                "name": {
                    'first': firstname,
                    'last': lastname
                },
                "email": email,
                "passwd": encrypted,
                "cart": []
            }
            const checkUnique = await col.findOne({ "email": email });
            if (checkUnique == null) {
                await col.insertOne(user);
                console.log("Success");
                res.send({status: 'success', user: user});
            }
            else {
                console.log("User Already exists.");
                res.send({status: 'exists'});
            }
            await client.close();
            return;
        }
        catch(err) {
            console.log("error in try-catch")
            await client.close();
            res.send({status: 'error'})
            return;
        }
    }
    );
}

router.post('/', async function (req, res, next) {
    console.log("Adding user")
    const firstname = req.body.name.first;
    const lastname = req.body.name.last;
    const email = req.body.email;
    const passwd = req.body.password;

    console.log(firstname);
    await addUser(firstname, lastname, email, passwd, res);
});

module.exports = router;
