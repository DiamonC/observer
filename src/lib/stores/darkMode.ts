import { browser } from "$app/environment"
import { writable } from "svelte/store"

const defaultValue = 'summer';
const initialValue = browser ? window.localStorage.getItem('darkMode') ?? defaultValue : defaultValue;

const darkMode = writable(initialValue)

darkMode.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem("darkMode", value)
    }
})

export default darkMode;

