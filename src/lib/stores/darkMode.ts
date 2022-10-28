import { browser } from "$app/environment"
import { writable } from "svelte/store"

const defaultValue = true;
const initialValue = browser ? window.localStorage.getItem('darkMode') ?? defaultValue : defaultValue;

const darkMode = writable(initialValue)

darkMode.subscribe((value) => {
    let newValue: string = value.toString() 
    if (browser) {
        window.localStorage.setItem("darkMode", newValue)
    }
})

export default darkMode;

