export const load = async (loadEvent) => {
	const { fetch, depends } = loadEvent;
	depends('stocks:active');
	const response = await fetch('/dataInvalidation/api');
	return { stocks: await response.json() };
};
