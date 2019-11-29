const express = require('express');
const cors = require('cors');
const app = express();
<<<<<<< HEAD
const port = 3000;
const cron = require('node-cron');
=======
const port =process.env.PORT || 3000;
>>>>>>> bdecaa958ab6d1a96a7a3150e72477ba275beba3
var bodyparse = require('body-parser');
const transaction = require('./controller/fuel-service-transaction');

cron.schedule(
	'*/30 * * * *',
	function() {
		console.log('run...');
		transaction();
	},
	function() {},
	null
);

app.use(bodyparse.json());
app.use(bodyparse.urlencoded({ extended: false }));
app.use(cors());

var fuelservietransaction = require('./routes/fuel-service-transaction');

app.use('/', fuelservietransaction);

app.listen(port, () => console.log(`App is online ${port}`));
