import { browser } from "$app/environment"
import { writable } from "svelte/store"

const defaultValue = "";
const initialValue = browser ? window.localStorage.getItem('token') ?? defaultValue : defaultValue;

const token = writable(initialValue)

token.subscribe((value) => {
    let newValue: string = value.toString() 
    if (browser) {
        window.localStorage.setItem("token", newValue)
    }
})

export default token;

