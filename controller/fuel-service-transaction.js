const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const fuelservice = express.Router();
const FuelApi = require('../models/fuel_log_api');
const Correlaid = require('../models/correlaid');

function transaction() {
	try {
		FuelApi.findAll({
			limit: 1,
			order: [['ID', 'DESC']]
		}).then(function(data) {
			console.log(data);
			if (data.length != 0) {
				console.log(data[0]['id']);
				const body = {
					usuario: 'jobando',
					contrasenya: 'obando2019',
					company: 'Ingenio montelimar',
					lastregisterID: data[0]['id']
				};

				fetch('http://fuel-service.herokuapp.com/fuel_service', {
					method: 'post',
					body: JSON.stringify(body),
					headers: { 'Content-Type': 'application/json' }
				})
					.then(res => res.json())
					.then(json => {
						if (json) {
							var obj = JSON.stringify(json);
							var conv = JSON.parse(obj);

							for (i = 0; i < conv['RefuelRecord'].length; i++) {
								FuelApi.create({
									ID: conv['RefuelRecord'][i]['IXID'],
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
									CC: conv['RefuelRecord'][i]['CC']
								}).then(resp => {
									console.log('procesado correctamente ');
								});
							}
						}
					});
			} else {
				const body = {
					usuario: 'jobando',
					contrasenya: 'obando2019',
					company: 'Ingenio montelimar',
					lastregisterID: 12723227
				};

				fetch('http://fuel-service.herokuapp.com/fuel_service', {
					method: 'post',
					body: JSON.stringify(body),
					headers: { 'Content-Type': 'application/json' }
				})
					.then(res => res.json())
					.then(json => {
						if (json) {
							var obj = JSON.stringify(json);
							var conv = JSON.parse(obj);

							for (i = 0; i < conv['RefuelRecord'].length; i++) {
								FuelApi.create({
									ID: conv['RefuelRecord'][i]['IXID'],
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
									CC: conv['RefuelRecord'][i]['CC']
								}).then(resp => {
									console.log('procesado correctamente ');
								});
							}
						}
					});
			}
		});
	} catch (error) {
		console.log(error);
	}
}
module.exports = transaction;
//12723227
