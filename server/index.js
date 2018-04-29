import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import path from 'path';
import mongoose from 'mongoose';
import router from './router';
import config from './config';
import session from 'express-session';



const app = express();


// Setting up basic middleware for all Express requests
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies and not extended amount of data
app.use(bodyParser.json()); // Send JSON responses
app.use(logger('dev')); // Log requests to API using morgan

// Enable CORS from client-side
app.use((req, res, next) => {

  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

mongoose.Promise = global.Promise;
const MongoStore = require("connect-mongo")(session);

// Database Setup
mongoose.connect(config.database, (mongooseErr) => {
  if(mongooseErr) {
    console.error(mongooseErr);
  }
  else {
    // session store Setup
    const sessionParameters = session({
      secret: config.secret,
      saveUninitialized: false,
      resave: false,
      store: new MongoStore({
        mongooseConnection: mongoose.connection
      }),
      cookie: {
        path: "/",
        secure: true
      }
    });
    app.use(sessionParameters);
    router(app);
  }
});

const server =  app.listen(3000, '0.0.0.0', function() {
  console.log('Listening to port:  ' + 3000);
});
console.log(`Your server is running on port ${config.port}.`);

module.exports = server;