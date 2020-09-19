import express from 'express';
import bodyParser from 'body-parser';
import routes from './routers/routers';



const app = express();

app.use(express.json());

app.use(bodyParser.json());

app.use('/', routes);



const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});

export default app;