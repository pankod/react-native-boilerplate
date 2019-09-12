// Global imports
import I18nClient from 'react-native-i18n';
// Local imports
import { EN, TR } from '@App/I18n/Languages';

I18nClient.fallbacks = true;
I18nClient.locale = 'tr';

I18nClient.translations = {
	en: EN,
	tr: TR
};

export let I18n = I18nClient;
