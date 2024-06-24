const mysql = require('mysql2/promise')
const db_connection = mysql.createPool({
    user:"root",
    password:"",
    database:"uniscore",
    host:"localhost",
    port:3306,
    waitForConnections:true,
    connectionLimit:100,
    queueLimit:0
})

async function testConnection(){
    try {
        const connnection =await mysql.createConnection({
            user:"root",
            password:"",
            database:"uniscore",
            host:"localhost",
            port:3306
        })
        // check database connectivity
        await connnection.query('SELECT 1')
        console.log('Database Connected')
        await connnection.end()
    } catch (error) {
            console.log('Error connecting to the database:',error.message)
    }
}
testConnection()
 module.exports = db_connection