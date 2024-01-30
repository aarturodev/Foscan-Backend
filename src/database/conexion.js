import mssql from 'mssql';
import {config} from 'dotenv';
config();

const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  server: process.env.SERVER,
  database: process.env.DB_NAME,
 options: {
    encrypt: true,
    enableArithAbort: true
  },
  requestTimeout: 500000,
}

export async function getConnection() {
  try {
    const pool = await mssql.connect(sqlConfig);
    if (pool) {
      console.log('DB is connected');
    }
    return pool;
  } catch (error) {
    console.log(error);
    
  }
}
