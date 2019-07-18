const express = require('express');
const app = express();
require('./routes/food')(app)

const Port = process.env.PORT || 3000

app.listen(Port, () => console.log(`Listening to the ${Port}`))
