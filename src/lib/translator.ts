import { register, init, waitLocale, _, locale as i18n_locale} from 'svelte-i18n';
import { locale } from './data';
import { get } from 'svelte/store';

register('en', () => import('./lang/en.json'));
register('pt', () => import('./lang/pt-br.json'));

init({
  fallbackLocale: 'en',
  initialLocale: get(locale),
});

locale.subscribe((value:string|null) => {
    i18n_locale.set(value)
})

export async function preload() {
    // awaits for the loading of the 'en-US' and 'en' dictionaries
    return waitLocale()
}

export {_}