const express = require('express');
const app = express();
const mongoose = require('mongoose');
const key = require('./config/db.js')
require('./routes/food')(app);








mongoose.connect(key.mongoURI, { useNewUrlParser: true })
.then(() => console.log('Connected to the database'))
.catch((err) => console.log(err))

const Port = process.env.PORT || 3000;
app.listen(Port, () => console.log(`Listening to the ${Port}`));
