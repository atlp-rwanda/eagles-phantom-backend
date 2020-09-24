/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import container from './languages/container.mjs';

const app = container.resolve('app');
app
  .start()
  .catch((error) => {
    console.warn(error);
    process.exit();
  });
