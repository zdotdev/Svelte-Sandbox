import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	login: async (loginEvent) => {
		const { request, cookies, url } = loginEvent;
		const data = await request.formData();
		const username = await data.get('username');
		const password = await data.get('password');
		if (!username) {
			return fail(400, {
				username,
				message: 'Missing username'
			});
		}
		if (!password) {
			return fail(400, {
				username,
				message: 'Missing password'
			});
		}
		cookies.set('username', username, { path: '/' });
		throw redirect(303, url.searchParams.get('redirect') || '/');
	},
	register: async (registerEvent) => {
		const { request, cookies, url } = registerEvent;
		const data = await request.formData();
		const username = await data.get('username');
		const password = await data.get('password');
		if (!username) {
			return fail(400, {
				username,
				message: 'Missing username'
			});
		}
		if (!password) {
			return fail(400, {
				username,
				message: 'Missing Password'
			});
		}
		cookies.set('username', username, { path: '/' });
		throw redirect(303, url.searchParams.get('redirect') || '/');
	}
};
