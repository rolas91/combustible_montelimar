const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define(
	'fuel_log_apis',
	{
		ID: {
			type: Sequelize.STRING
		},
		CID: {
			type: Sequelize.INTEGER
		},
		PID: {
			type: Sequelize.STRING
		},
		RT: {
			type: Sequelize.STRING
		},
		DID: {
			type: Sequelize.STRING
		},
		TID: {
			type: Sequelize.STRING
		},
		VID: {
			type: Sequelize.STRING
		},
		NN: {
			type: Sequelize.STRING
		},
		OD: {
			type: Sequelize.STRING
		},
		TC: {
			type: Sequelize.STRING
		},
		EH: {
			type: Sequelize.INTEGER
		},
		JID: {
			type: Sequelize.STRING
		},
		CS: {
			type: Sequelize.STRING
		},
		CE: {
			type: Sequelize.STRING
		},
		TN: {
			type: Sequelize.STRING
		},
		CT: {
			type: Sequelize.STRING
		},
		DS: {
			type: Sequelize.STRING
		},
		EHP: {
			type: Sequelize.INTEGER
		},
		EHT: {
			type: Sequelize.INTEGER
		},
		SID: {
			type: Sequelize.INTEGER
		},
		CC: {
			type: Sequelize.STRING
		}
	},
	{
		timestamps: false
	}
);
