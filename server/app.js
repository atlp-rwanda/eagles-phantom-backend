import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';


dotenv.config();

const app = express();

app.use(express.json());

app.use(bodyParser.json());

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`This is where the port is running from ... ${port} `)
});

export default app;