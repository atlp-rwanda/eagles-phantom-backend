/* eslint-disable import/no-named-as-default */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
// eslint-disable-next-line import/no-named-as-default-member
import routes from './routers/routers';

dotenv.config();

const app = express();

app.use(express.json());

app.use(bodyParser.json());

app.use(routes);

app.use(cors());

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});

export default app;
