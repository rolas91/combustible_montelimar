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
			if (JSON.stringify(data) != '[]') {
				const body = {
					usuario: 'jobando',
					contrasenya: 'obando2019',
					company: 'Ingenio montelimar',
					lastregisterID: data[0]['ID']
				};

				fetch('http://fuel-service.herokuapp.com/fuel_service', {
					method: 'post',
					body: JSON.stringify(body),
					headers: { 'Content-Type': 'application/json' }
				})
					.then(res => res.json())
					.then(json => {
						if (json) {
							for (i = 1; i < json.response.REFUELS.R.length; i++) {
								FuelApi.create({
									ID:
										json.response.REFUELS.R[i].IXID != undefined
											? json.response.REFUELS.R[i].IXID[0]
											: 0,
									CID:
										json.response.REFUELS.R[i].CID != undefined
											? json.response.REFUELS.R[i].CID[0]
											: 0,
									PID:
										json.response.REFUELS.R[i].PID != undefined
											? json.response.REFUELS.R[i].PID[0]
											: 0,
									RT:
										json.response.REFUELS.R[i].RT != undefined
											? json.response.REFUELS.R[i].RT[0]
											: 0,
									DID:
										json.response.REFUELS.R[i].DID != undefined
											? json.response.REFUELS.R[i].DID[0]
											: 0,
									TID:
										json.response.REFUELS.R[i].TID != undefined
											? json.response.REFUELS.R[i].TID[0]
											: 0,
									VID:
										json.response.REFUELS.R[i].VID != undefined
											? json.response.REFUELS.R[i].VID[0]
											: 0,
									NN:
										json.response.REFUELS.R[i].NN != undefined
											? json.response.REFUELS.R[i].NN[0]
											: 0,
									OD:
										json.response.REFUELS.R[i].OD != undefined
											? json.response.REFUELS.R[i].OD[0]
											: 0,
									TC:
										json.response.REFUELS.R[i].TC != undefined
											? json.response.REFUELS.R[i].TC[0]
											: 0,
									EH:
										json.response.REFUELS.R[i].EH != undefined
											? json.response.REFUELS.R[i].EH[0]
											: 0,
									JID:
										json.response.REFUELS.R[i].JID != undefined
											? json.response.REFUELS.R[i].JID[0]
											: 0,
									CS:
										json.response.REFUELS.R[i].CS != undefined
											? json.response.REFUELS.R[i].CS[0]
											: 0,
									CE:
										json.response.REFUELS.R[i].CE != undefined
											? json.response.REFUELS.R[i].CE[0]
											: 0,
									TN:
										json.response.REFUELS.R[i].TN != undefined
											? json.response.REFUELS.R[i].TN[0]
											: 0,
									CT:
										json.response.REFUELS.R[i].CT != undefined
											? json.response.REFUELS.R[i].CT[0]
											: 0,
									DS:
										json.response.REFUELS.R[i].DS != undefined
											? json.response.REFUELS.R[i].DS[0]
											: 0,
									EHP:
										json.response.REFUELS.R[i].EHP != undefined
											? json.response.REFUELS.R[i].EHP[0]
											: 0,
									EHT:
										json.response.REFUELS.R[i].EHT != undefined
											? json.response.REFUELS.R[i].EHT[0]
											: 0,
									SID:
										json.response.REFUELS.R[i].SID != undefined
											? json.response.REFUELS.R[i].SID[0]
											: 0,
									CC:
										json.response.REFUELS.R[i].CC != undefined
											? json.response.REFUELS.R[i].CC[0]
											: 0,
									PN:
										json.response.REFUELS.R[i].PN != undefined
											? json.response.REFUELS.R[i].PN[0]
											: 0,
									PPM:
										json.response.REFUELS.R[i].PPM != undefined
											? json.response.REFUELS.R[i].PPM[0]
											: 0,
									SN:
										json.response.REFUELS.R[i].SN != undefined
											? json.response.REFUELS.R[i].SN[0]
											: 0,
									FTN:
										json.response.REFUELS.R[i].FTN != undefined
											? json.response.REFUELS.R[i].FTN[0]
											: 0
								}).then(resp => {});
							}
							console.log('procesado correctamente ');
						}
					});
			} else {
				const body = {
					usuario: 'jobando',
					contrasenya: 'obando2019',
					company: 'Ingenio montelimar',
					lastregisterID: 12748201
				};

				fetch('http://fuel-service.herokuapp.com/fuel_service', {
					method: 'post',
					body: JSON.stringify(body),
					headers: { 'Content-Type': 'application/json' }
				})
					.then(res => res.json())
					.then(json => {
						if (json) {
							for (i = 0; i < json.response.REFUELS.R.length; i++) {
								FuelApi.create({
									ID:
										json.response.REFUELS.R[i].IXID != undefined
											? json.response.REFUELS.R[i].IXID[0]
											: 0,
									CID:
										json.response.REFUELS.R[i].CID != undefined
											? json.response.REFUELS.R[i].CID[0]
											: 0,
									PID:
										json.response.REFUELS.R[i].PID != undefined
											? json.response.REFUELS.R[i].PID[0]
											: 0,
									RT:
										json.response.REFUELS.R[i].RT != undefined
											? json.response.REFUELS.R[i].RT[0]
											: 0,
									DID:
										json.response.REFUELS.R[i].DID != undefined
											? json.response.REFUELS.R[i].DID[0]
											: 0,
									TID:
										json.response.REFUELS.R[i].TID != undefined
											? json.response.REFUELS.R[i].TID[0]
											: 0,
									VID:
										json.response.REFUELS.R[i].VID != undefined
											? json.response.REFUELS.R[i].VID[0]
											: 0,
									NN:
										json.response.REFUELS.R[i].NN != undefined
											? json.response.REFUELS.R[i].NN[0]
											: 0,
									OD:
										json.response.REFUELS.R[i].OD != undefined
											? json.response.REFUELS.R[i].OD[0]
											: 0,
									TC:
										json.response.REFUELS.R[i].TC != undefined
											? json.response.REFUELS.R[i].TC[0]
											: 0,
									EH:
										json.response.REFUELS.R[i].EH != undefined
											? json.response.REFUELS.R[i].EH[0]
											: 0,
									JID:
										json.response.REFUELS.R[i].JID != undefined
											? json.response.REFUELS.R[i].JID[0]
											: 0,
									CS:
										json.response.REFUELS.R[i].CS != undefined
											? json.response.REFUELS.R[i].CS[0]
											: 0,
									CE:
										json.response.REFUELS.R[i].CE != undefined
											? json.response.REFUELS.R[i].CE[0]
											: 0,
									TN:
										json.response.REFUELS.R[i].TN != undefined
											? json.response.REFUELS.R[i].TN[0]
											: 0,
									CT:
										json.response.REFUELS.R[i].CT != undefined
											? json.response.REFUELS.R[i].CT[0]
											: 0,
									DS:
										json.response.REFUELS.R[i].DS != undefined
											? json.response.REFUELS.R[i].DS[0]
											: 0,
									EHP:
										json.response.REFUELS.R[i].EHP != undefined
											? json.response.REFUELS.R[i].EHP[0]
											: 0,
									EHT:
										json.response.REFUELS.R[i].EHT != undefined
											? json.response.REFUELS.R[i].EHT[0]
											: 0,
									SID:
										json.response.REFUELS.R[i].SID != undefined
											? json.response.REFUELS.R[i].SID[0]
											: 0,
									CC:
										json.response.REFUELS.R[i].CC != undefined
											? json.response.REFUELS.R[i].CC[0]
											: 0,
									PN:
										json.response.REFUELS.R[i].PN != undefined
											? json.response.REFUELS.R[i].PN[0]
											: 0,
									PPM:
										json.response.REFUELS.R[i].PPM != undefined
											? json.response.REFUELS.R[i].PPM[0]
											: 0,
									SN:
										json.response.REFUELS.R[i].SN != undefined
											? json.response.REFUELS.R[i].SN[0]
											: 0,
									FTN:
										json.response.REFUELS.R[i].FTN != undefined
											? json.response.REFUELS.R[i].FTN[0]
											: 0
								}).then(resp => {});
							}
							console.log('procesado correctamente ');
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
