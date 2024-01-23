import app from './app.js';
import './database/conexion.js';


app.listen(3000, () => {
     console.log('Server on port http://localhost:3000');
});