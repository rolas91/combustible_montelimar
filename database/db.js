const Sequelize = require("sequelize")
const db = {}
const sequelize = new Sequelize("dbcombustible", "cmonte","Monte2019", {
    dialect: 'mssql',
    host: '186.1.13.11',
    pool: {
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    },
    dialectOptions: {
        // e.g. socketPath: '/cloudsql/my-awesome-project:us-central1:my-cloud-sql-instance'
        // same as host string above
        //socketPath: '/cloudsql/alycoinappweb:us-central1:bdaly-ico'
    },
    logging: false,   
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
