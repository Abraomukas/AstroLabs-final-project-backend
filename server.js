// import the express library
const express = require('express');
// import the mongoose library
const mongoose = require('mongoose');
// import the cloudinary library
const cloudinary = require('cloudinary').v2;
// import the dotenv library
require('dotenv').config();
// import the express form data library
const expressFormData = require('express-form-data');
// import the cors library
const cors = require('cors');
// import the passport library for authentication
const passport = require('passport');
// imports for JWT
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// reference the secret for the JWT
const jwtSecret = process.env.JWT_SECRET;

const passportJwtConfig = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecret
}

// function that reads the payload of the JWT
const passportJwt = (passport) => {
    // configure passport to use passport-jwt
    passport.use(
        new JwtStrategy(
            passportJwtConfig,
            (jwtPayload, done) => {
                // find and extract the user by their id, which is inside the JWT
                HumansModel
                    .findOne({ _id: jwtPayload.id })
                    .then(
                        // if the document is found
                        (dbDocument) => {
                            return done(null, dbDocument);
                        }
                    )
                    .catch(
                        (error) => {
                            return done(null, null);
                        }
                    );
            }
        )
    );
}

passportJwt(passport);


const doggosRoutes = require('./routes/doggos');
const humansRoutes = require('./routes/humans');

// express() returns an object capable of running server operations
const server = express();

// connect to MongoDB
const db_connection = process.env.DB_CONNECTION;
const conn_config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// configuure express to read HTTP's body
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
// configure express to read form data
server.use(expressFormData.parse());

// allow Cross-Origin resource sharing
server.use(cors());

mongoose
    .connect(db_connection, conn_config)
    .then(
        () => {
            console.log("Connection to MongoDB successful!");
        }
    )
    .catch(
        (error) => {
            console.log("MongoDB error!", error);
        }
    );

// configuration for Cloudinary
cloudinary.config(
    {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLUDINARY_API_SECRET
    }
);

// all requests that go through .../doggos/
server.use(
    '/doggos',
    doggosRoutes
);

// all requests that go through .../humans/
server.use(
    '/humans',
    humansRoutes
);

// homepage
server.get(
    '/',
    (req, res) => {
        res.send('Hello Word!');
    }
);

// our doggos page
server.get(
    '/doggos',
    (req, res) => {
        res.send('Hello doggos!');
    }
);

// our humans page
server.get(
    '/humans',
    (req, res) => {
        res.send('Hello humans!');
    }
);

// about page
server.get(
    '/about',
    (req, res) => {
        res.send('Welcome to the about page!');
    }
);

// contact page
server.get(
    '/contact',
    (req, res) => {
        res.send('Welcome to the contact page!');
    }
);

server.listen(
    process.env.PORT || 3001,
    () => {
        console.log("Tinder for doggos is live on http://localhost:3001");
    }
)