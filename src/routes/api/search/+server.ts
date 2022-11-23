export async function GET(req) {
	return {
		body: {
			param: req
		}
	};
}

// export async function post(req) {
//     const obj = {}

//     for (const [key, value] of req.url.searchParams) {
//         obj[key] = value
//     }

//     return {
//         body: {
//             query: obj
//         }
//     }
// }
