const config={
    server: "DESKTOP-817SO98",
    database: "CountryProfileDB",
    user: "sa",
    password: "ankit",
    //driver: "msnodesqlv8",
    options: {
      encrypt: false, // Set to true if you are using a secure connection (HTTPS)
      trustedConnection: true, // Set to true if you are using Windows Authentication
      instancename:'SQLEXPRESS'

    },
    port:52485
  
}



module.exports= config;

const sql = require('mssql')
let db_config= require('./dbconfig');

export default async function connectToDatabase() {
    try {
          await sql.connect(db_config);
        //console.log("Connected to the MS SQL database");
    } catch (error) {
      console.error("Connect to DB Error Error connecting to the database:", error);
    }
  }