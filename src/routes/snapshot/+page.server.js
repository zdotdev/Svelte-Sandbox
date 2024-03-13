import { redirect } from '@sveltejs/kit';
export const load = (loadEvent) => {
	const { cookies, url } = loadEvent;
	if (!cookies.get('username')) {
		throw redirect(307, `/snapshot/auth?redirect=${url}`);
	}
};
