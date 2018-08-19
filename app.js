const express = require('express');
const mongoose = require('mongoose');
const app = express();


/*Display a working send from the server*/
app.get('/', (req, res) => {
    res.send('this is working');
});



const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server has started on ${port}`);
});