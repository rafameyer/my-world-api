const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/defaultController')(app);

app.listen(process.env.PORT || 3333);