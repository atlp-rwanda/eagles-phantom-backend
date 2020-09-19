/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-console */
// eslint-disable-next-line import/extensions
import container from './languages/container.mjs';

const app = container.resolve('app');

app
  .start()
  .catch((error) => {
    console.warn(error);
    process.exit();
  });
