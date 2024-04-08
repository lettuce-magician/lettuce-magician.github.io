import { browser } from '$app/environment';
import { getLocaleFromNavigator } from 'svelte-i18n';
import { writable } from 'svelte/store';

function storable(key:string,init:any) {
    if (!browser) return writable("nil");

    let val = localStorage.getItem(key)
    if (!val) {
        localStorage[key] = init
        val = init
    }

    const s = writable(localStorage.getItem(key))
    s.subscribe((val) => {
        localStorage[key] = val
    })
    return s;
}

export const locale = storable("locale", getLocaleFromNavigator())