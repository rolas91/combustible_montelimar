const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const fuelservice = express.Router();
const FuelApi = require('../models/fuel_log_api');

fuelservice.get('/getdata/:id', (req, response, next) => {
	try {
		const body = {
			usuario: 'jobando',
			contrasenya: 'obando2019',
			company: 'Ingenio montelimar',
			lastregisterID: req.params.id
		};

		fetch('http://fuel-service.herokuapp.com/fuel_service', {
			method: 'post',
			body: JSON.stringify(body),
			headers: { 'Content-Type': 'application/json' }
		})
			.then(res => res.json())
			.then(json => {
				var obj = JSON.stringify(json);
				var conv = JSON.parse(obj);

				for (i = 0; i < conv['RefuelRecord'].length; i++) {
					FuelApi.create({
						IXID: conv['RefuelRecord'][i]['IXID'],
						CID: conv['RefuelRecord'][i]['CID'],
						PID: conv['RefuelRecord'][i]['PID'],
						RT: conv['RefuelRecord'][i]['RT'],
						DID: conv['RefuelRecord'][i]['DID'],
						TID: conv['RefuelRecord'][i]['TID'],
						VID: conv['RefuelRecord'][i]['VID'],
						NN: conv['RefuelRecord'][i]['NN'],
						OD: conv['RefuelRecord'][i]['OD'],
						TC: conv['RefuelRecord'][i]['TC'],
						EH: conv['RefuelRecord'][i]['EH'],
						JID: conv['RefuelRecord'][i]['JID'],
						CS: conv['RefuelRecord'][i]['CS'],
						CE: conv['RefuelRecord'][i]['CE'],
						TN: conv['RefuelRecord'][i]['TN'],
						CT: conv['RefuelRecord'][i]['CT'],
						DS: conv['RefuelRecord'][i]['DS'],
						EHP: conv['RefuelRecord'][i]['EHP'],
						EHT: conv['RefuelRecord'][i]['EHT'],
						SID: conv['RefuelRecord'][i]['SID'],
						CC: conv['RefuelRecord'][i]['CC'],
						PN: conv['RefuelRecord'][i]['PN'],
						PMM: conv['RefuelRecord'][i]['PMM'],
						SN: conv['RefuelRecord'][i]['SN'],
						FTN: conv['RefuelRecord'][i]['FTN']
					}).then(resp => {
						if (resp) {
							return response.send('Procesado con exito');
						}
					});
				}
			});
	} catch (error) {
		console.log(error);
	}
});
module.exports = fuelservice;
//12723227
