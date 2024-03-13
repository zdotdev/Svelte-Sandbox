// i use Server load function(+page.server.js) because it can access the cookies and universal load function (+page.js) cant
import { redirect } from "@sveltejs/kit" // is used to redirect pages if an argument or conditions are met
export const load = (loadEvent) => {
    const { cookies, url } = loadEvent
    if (!cookies.get('username')) {
        throw redirect(307, `/formRedirect/auth?redirect=${url}`) /* first parameter is error code and the second is the route where to 
        redirect. redirect can be change, it is just used for naming the parameter that will be used to redirect back to the
         main page after successful authentication */
    }
}