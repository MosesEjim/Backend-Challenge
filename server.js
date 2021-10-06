const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



// Includes routes
const buyRequests = require('./routes/api/BuyRequest');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.json({ msg: 'BuyRequest works' });
});

// DB config
const db = require('./config/keys').mongoUri;

// Connect to DB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB successfuly connected'))
  .catch(err => console.log(err));






// use routes
app.use('/api/requests', buyRequests);


// Define Port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));