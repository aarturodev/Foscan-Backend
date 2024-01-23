import mssql from 'mssql';
import {config} from 'dotenv';
config();

const sqlConfig = {
  user: 'Despliegue',
  password: 'datastarup2023*',
  server: 'star.database.windows.net',
  database: 'Inicio',
 options: {
    encrypt: true,
    enableArithAbort: true
  },
  requestTimeout: 500000,
}

export async function getConnection() {
  try {
    const pool = mssql.connect(sqlConfig);
    if (pool) {
      console.log('DB is connected');
    }
    return pool;
  } catch (error) {
    console.log(error);
  }
}
