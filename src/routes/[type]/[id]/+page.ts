import type { LoadInput } from '@sveltejs/kit';
export async function load({ params, fetch }: LoadInput) {
	try {
		const res = await fetch(`/api/${params.type}/${params.id}`);
		const data = await res.json();

		const dataType = params.type === 'movie' ? data.movie : data.tv;
		console.log(dataType);

		return {
			data: dataType
		};
	} catch (e) {
		throw new Error(e);
	}
}
