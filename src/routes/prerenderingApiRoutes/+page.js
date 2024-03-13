export const load = async (loadEvent) => {
	const { fetch } = loadEvent;
	const response = await fetch('/prerenderingApiRoutes/api');
	return { time: await response.text() };
};
