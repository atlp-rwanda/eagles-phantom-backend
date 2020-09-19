/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
import i18n from 'i18n';
import path from 'path';

i18n.configure({
  locales: ['en', 'kiny', 'fr'],
  defaultLocale: 'en',
  queryParameter: 'lang',
  directory: path.join('./', 'locales'),
  // api: {
  //   '__': 'translate',
  //   '__n': 'translateN'
  // },
});

export default i18n;
