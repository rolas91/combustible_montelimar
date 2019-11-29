const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define(
	'correlaids',
	{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		lastID: {
			type: Sequelize.INTEGER
		}
	},
	{
		timestamps: false
	}
);
