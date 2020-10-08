import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import i18n from 'i18n';
import routes from './routers/routers';

dotenv.config();

const app = express();

app.use(i18n.init);

app.use(express.json());

app.use(bodyParser.json());

app.use('/', routes);

app.use('/v1/auth/login', routes);

app.use(cors());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup());

const port = process.env.PORT || 3020;

app.listen(port, () => {
  console.log(port);
});

export default app;
