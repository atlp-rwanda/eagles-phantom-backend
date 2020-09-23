import container from './languages/container.mjs'
const app = container.resolve('app');


// // const localeService = new LocaleService(i18n);

// const localeService = container.resolve('localeService');

// localeService.getLocales(); // ['en', 'el']
// localeService.getCurrentLocale(); // 'en'
// localeService.setLocale('el');
// console.log(localeService.translate('Hello'));
// console.log(localeService.translatePlurals('You have %s message', 3));


app
  .start()
  .catch((error) =>{ 
    console.warn(error);
    process.exit();
})
