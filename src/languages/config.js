import i18n from 'i18n';
import path from 'path';
import express from 'express';

const app = express();

i18n.configure({
  locales: ['en', 'fr', 'kiny'],
  directory: path.join('./src/languages', '/locales'),
  defaultLocale: 'en',
  queryParameter: 'lang',
});

app.use(i18n.init);

export default app;
