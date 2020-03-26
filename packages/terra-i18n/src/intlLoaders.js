/* eslint-disable import/no-unresolved, compat/compat, no-console */
import intlLoaders from 'intlLoaders';
import hasIntlData from 'intl-locales-supported';

const loadFallbackIntl = (localeContext) => {
  try {
    if (!hasIntlData(['en'], [])) {
      intlLoaders.en();
    }

    if (process.env.NODE_ENV !== 'production') {
      console.warn(`Locale data was not supplied for the ${localeContext}. Using en data as the fallback locale data.`);
    }
  } catch (e) {
    throw new Error(`Locale data was not supplied for the ${localeContext}, or the en fallback locale.`);
  }
};

const loadIntl = (locale) => {
  const fallbackLocale = locale.split('-').length > 1 ? locale.split('-')[0] : false;
  try {
    if (!hasIntlData([locale], [])) {
      intlLoaders[locale]();
    }
  } catch (e) {
    if (fallbackLocale) {
      try {
        if (!hasIntlData([fallbackLocale], [])) {
          intlLoaders[fallbackLocale]();
        }

        if (process.env.NODE_ENV !== 'production') {
          console.warn(`Locale data was not supplied for the ${locale} locale. Using ${fallbackLocale} data as the fallback locale data.`);
        }
      } catch (error) {
        const localeContext = `${locale} or ${fallbackLocale} locales`;
        loadFallbackIntl(localeContext);
      }
    } else {
      const localeContext = `${locale} locale`;
      loadFallbackIntl(localeContext);
    }
  }
};

export default loadIntl;

export {
  loadIntl,
};
/* eslint-enable import/no-unresolved, compat/compat, no-console */
