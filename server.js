const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



// Includes routes
const requests = require('./routes/api/requests');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.json({ msg: "This is my Backend Challenge solution The link to the APIs are:",
    root: "https://requests-challenge.herokuapp.com/",
    'post BuyRequests' : "https://requests-challenge.herokuapp.com/api/requests/buy/create",
    'post SellRequests': "https://requests-challenge.herokuapp.com/api/requests/sell/create",
    'get BuyRequests or SellRequests' : "https://requests-challenge.herokuapp.com/api/requests/:type",
     'hint':"type is either 'buy' for BuyRequests or 'sell' for SellRequests"});
});

// DB config
const db = require('./config/keys').mongoUri;

// Connect to DB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB successfuly connected'))
  .catch(err => console.log(err));






// use routes
app.use('/api/requests', requests);


// Define Port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));