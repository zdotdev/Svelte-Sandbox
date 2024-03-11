export const load = async (loadEvent) => {
	const { data } = loadEvent;
	try {
		return { ...data };
	} catch (err) {
		console.log(err);
	}
	
};

export const ssr = true; // boolean true or false
export const csr = true;