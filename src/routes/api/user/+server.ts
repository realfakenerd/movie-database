import { TMDB_KEY } from "$env/static/private";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({fetch, cookies}) => {
    const session = cookies.get('session');
    if(session) {
        const res = await fetch(`https://api.themoviedb.org/3/account?api_key=${TMDB_KEY}&session_id=${session}`);
        const data = await res.json();
        return json(data);
    }
    return new Response(String(null))
}