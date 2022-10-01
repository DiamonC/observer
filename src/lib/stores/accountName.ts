import { browser } from "$app/environment"
import { writable } from "svelte/store"

const defaultValue = "hi";
const initialValue = browser ? window.localStorage.getItem('accountName') ?? defaultValue : defaultValue;

const accountName = writable(initialValue)

accountName.subscribe((value) => {
    let newValue: string = value.toString() 
    if (browser) {
        window.localStorage.setItem("accountName", newValue)
    }
})

export default accountName;

