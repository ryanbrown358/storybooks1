const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
//passport config
require('./config/passport')(passport);
// load Routes
const auth = require('./routes/auth');

const app = express();


/*Display a working send from the server*/
app.get('/', (req, res) => {
    res.send('this is working');
});


// use Routes
app.use('/auth', auth);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server has started on ${port}`);
});