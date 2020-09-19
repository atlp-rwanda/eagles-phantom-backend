/* eslint-disable import/named */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import awilix from 'awilix';
import i18n from './i18n.config.mjs';
import { LocaleService } from './services/languageService.mjs';
import { Server } from './server.mjs';
import { Application } from './application.mjs';

const container = awilix.createContainer();

container
  .register({
    app: awilix.asClass(Application, { lifetime: awilix.Lifetime.SINGLETON }),
    server: awilix.asClass(Server, { lifetime: awilix.Lifetime.SINGLETON }),
  })
  .register({
    localeService: awilix.asClass(LocaleService, { lifetime: awilix.Lifetime.SINGLETON }),
  })
  .register({
    i18nProvider: awilix.asValue(i18n),
  });

export default container;
