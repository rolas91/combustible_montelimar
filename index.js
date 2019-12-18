const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;
const cron = require('node-cron');
var bodyparse = require('body-parser');
const transaction = require('./controller/fuel-service-transaction');

app.use(bodyparse.json());
app.use(bodyparse.urlencoded({ extended: false }));
app.use(cors());

var fuelservietransaction = require('./routes/fuel-service-transaction');

app.use('/', fuelservietransaction);

app.listen(port, () => {
	cron.schedule(
		'*/30 * * * *',
		function() {
			console.log('run...');
			transaction();
		},
		function() {},
		null
	);
	console.log(`App is online ${port}`);
});
