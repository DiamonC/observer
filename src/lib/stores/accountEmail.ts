import { browser } from "$app/environment"
import { writable } from "svelte/store"

const defaultValue = "noemail";
const initialValue = browser ? window.localStorage.getItem('accountEmail') ?? defaultValue : defaultValue;

const accountEmail = writable(initialValue)

accountEmail.subscribe((value) => {
    let newValue: string = value.toString() 
    if (browser) {
        window.localStorage.setItem("accountEmail", newValue)
    }
})

export default accountEmail;

