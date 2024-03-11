import Component from './component.svelte';
export const load = async (loadEvent) => {
	const notification = 'Main +page.svelte';
	const { data } = loadEvent;
	const headTitle = 'Sub main Sandbox';
	return { ...data, Component: Component, notification, headTitle };
};
