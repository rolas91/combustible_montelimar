const express = require('express');
const cors = require("cors");
const app = express();
const port = 3000;
var bodyparse = require('body-parser');

app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extended:false}));
app.use(cors());

var fuelservietransaction = require("./routes/fuel-service-transaction");

app.use('/', fuelservietransaction);


app.listen(port, () => console.log(`App is online ${port}`));
