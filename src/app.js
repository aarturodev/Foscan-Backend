import express from 'express';
import cors from 'cors';

import routes from './routes/data.route.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes)


app.get('/', (req, res) => {
     res.send('Hello api!')
});


export default app;