import mysql from "mysql2";

const connectionUri = `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const dbConn = mysql.createConnection(connectionUri);
export default dbConn
