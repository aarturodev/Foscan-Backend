import app from './app.js';
import './database/conexion.js';

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
     console.log(`Server on port http://localhost:${PORT}`);
});