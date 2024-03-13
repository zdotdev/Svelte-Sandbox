export const GET = () => {
	return new Response(new Date().toLocaleTimeString());
};
export const prerender = true;
