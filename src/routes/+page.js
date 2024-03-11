export const load = async (laodEvent) => {
    const { fetch } = laodEvent
    const response = await fetch('prerenderingApiRoutes/api') /* because the main +page.js is declared to prerender, 
    the time will be static */
    return { time: await response.text()}
}
export const ssr = true // because the page is static and does not rely on javascript
export const csr = true
export const prerender = true