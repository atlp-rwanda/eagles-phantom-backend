// import { LocaleService } from './languages/services/languageService.mjs';
// import i18n from './languages/i18n.config.mjs';
import container from './languages/services/container.mjs'
const localeService = container.resolve('localeService');

// localeService.getLocales(); // ['en', 'el']
// localeService.getCurrentLocale(); // 'en'
localeService.setLocale('el');//'el'
console.log(localeService.translate('Hello')); //  'Hello'
console.log(localeService.translatePlurals('You have %s message', 3)); // 'You have 3 messages'

