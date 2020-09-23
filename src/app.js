import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
// import swagger from '../swagger.json';
import routes from './routers/routers';
import translator from './languages/config';

dotenv.config();

const app = express();

app.use(express.json());

app.use(bodyParser.json());

app.use('/', routes);

app.use(translator);

app.use(cors());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup());

const port = process.env.PORT || 3020;

app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});

export default app;
