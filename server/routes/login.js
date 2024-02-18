var express = require('express');
var bcrypt = require('bcrypt');
var passport = require('passport');
var Strategy = require('passport-local');
const { MongoClient, ServerApiVersion } = require('mongodb');
var router = express.Router();

let link_ = "http://localhost:5173/"
let link_login = "http://localhost:5173/login"

const uri = "mongodb+srv://kushchoudhary8430:ForTesting8430@cluster-kc.js7vwme.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

router.use(passport.initialize());
router.use(passport.session());

router.post('/', function(req, res, next) {
  passport.authenticate('local', (err, user, info, status) => {
    if(err) {console.log('Error authenticating user: ', err);}
    if(!user) {
      res.send({verified: false});
    }
    else {
      res.send({verified: true, user: user});

    }
  })(req, res, next);
}
);

passport.use(
  new Strategy(async function(username, password, cb) {
    try {
      await client.connect();
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
      const db = client.db("e-commerce");
      const col = db.collection("users");

      await col.findOne({ "email": username })
        .then(user => {
          if (user == null) {
            res.send("user not found")
            return;
          }

          const hash = user["passwd"];
          bcrypt.compare(password, hash, (err, isVerified) => {
            if (err) {
              console.log("Error in checking password!")
              return cb(err);
            }

            if (isVerified) {
              console.log("Verified");
              return cb(null, user);
            }
            else {
              console.log("Not Verified");
              return cb(null, false);
            }
          });
        }
        )
      await client.close();
    }
    catch (err) {
      console.log(err);
    }
  })
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});
passport.deserializeUser((user, cb) => {
  cb(null, user);
});

module.exports = router;
