import mssql from 'mssql';
import {config} from 'dotenv';
config();

const sqlConfig = {
 user:         process.env.DB_USER,
 password:     process.env.DB_PWD,
 server:       process.env.SERVER,
 database:     process.env.DB_NAME,
 options: {
    encrypt: true,
    trustServerCertificate: true // change to true for local dev / self-signed certs
  },
  requestTimeout: 30000
}

export async function getConnection() {
 const pool = mssql.connect(sqlConfig);
     return pool;
}
