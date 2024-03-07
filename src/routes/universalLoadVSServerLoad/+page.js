import Product from './component/component.svelte'
export const load = async (loadData) => {
    const { data } = loadData // data is the passed data from the server
    return {...data, Component : Product} // must use spread operator to iterate all the data from +page.server.js
}