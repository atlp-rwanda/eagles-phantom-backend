/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
import awilix from 'awilix';
import i18n from '../i18n.config.mjs';
import { LocaleService } from './languageService.mjs';

const container = awilix.createContainer();

container
  .register({
    localeService: awilix.asClass(LocaleService, { lifetime: awilix.Lifetime.SINGLETON }),
  })
  .register({
    i18nProvider: awilix.asValue(i18n),
  });

export default container;
