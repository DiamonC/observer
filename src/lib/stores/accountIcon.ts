import { browser } from "$app/environment"
import { writable } from "svelte/store"

const defaultValue = "https://s.namemc.com/2d/skin/face.png?id=7b5f434f34e25c37&scale=4";
const initialValue = browser ? window.localStorage.getItem('accountIcon') ?? defaultValue : defaultValue;

const accountIcon = writable(initialValue)

accountIcon.subscribe((value) => {
    let newValue: string = value.toString() 
    if (browser) {
        window.localStorage.setItem("accountIcon", newValue)
    }
})

export default accountIcon;

