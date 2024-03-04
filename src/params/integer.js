export function match(param) {
    return /^\d+$/.test(param) // This is a built in function in sveltekit where the parameter is accepted only if it is equivalent to integer
}