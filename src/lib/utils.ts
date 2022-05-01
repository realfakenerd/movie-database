import type { MovieApiNames, PopDef } from './types';

export const TMDB_URL: Readonly<string> = 'https://api.themoviedb.org/3';
export const Img_URL: Readonly<string> = 'https://image.tmdb.org/t/p/';
export function formatDate(dateStr: string) {
	const d = dateStr.split('-');
	if (!d.includes('')) {
		const date = new Date(Date.UTC(parseInt(d[0]), parseInt(d[1]), parseInt(d[2]) + 1));
		const dateFormated = new Intl.DateTimeFormat('en-Us').format(date);
		return dateFormated;
	} else return 'no release date yet :(';
}
export const formatNumberToMoney = (num: number) =>
	new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	}).format(num);

export function random(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function load<T = any>(url: string): Promise<Awaited<T>> {
	const res = await fetch(url);
	return await res.json();
}

export function switchAPI(api: MovieApiNames, apiData: PopDef) {
	switch (api) {
		case 'popular':
			return apiData.results.map((val) => {
				const ret = {
					id: val.id,
					title: val.title,
					poster_path: val.poster_path,
					release_date: val.release_date,
					vote_average: val.vote_average
				};
				return ret;
			});
		case 'upcoming':
			return apiData.results.map((val) => {
				const ret = {
					id: val.id,
					title: val.title,
					poster_path: val.poster_path,
					release_date: val.release_date,
					backdrop_path: val.backdrop_path
				};
				return ret;
			});
	}
}

export function parseMd(md: string) {
	//ul
	md = md.replace(/^\s*\n\*/gm, '<ul>\n*');
	md = md.replace(/^(\*.+)\s*\n([^\*])/gm, '$1\n</ul>\n\n$2');
	md = md.replace(/^\*(.+)/gm, '<li>$1</li>');

	//ol
	md = md.replace(/^\s*\n\d\./gm, '<ol>\n1.');
	md = md.replace(/^(\d\..+)\s*\n([^\d\.])/gm, '$1\n</ol>\n\n$2');
	md = md.replace(/^\d\.(.+)/gm, '<li>$1</li>');

	//blockquote
	md = md.replace(/^\>(.+)/gm, '<blockquote>$1</blockquote>');

	//h
	md = md.replace(/[\#]{6}(.+)/g, '<h6>$1</h6>');
	md = md.replace(/[\#]{5}(.+)/g, '<h5>$1</h5>');
	md = md.replace(/[\#]{4}(.+)/g, '<h4>$1</h4>');
	md = md.replace(/[\#]{3}(.+)/g, '<h3>$1</h3>');
	md = md.replace(/[\#]{2}(.+)/g, '<h2>$1</h2>');
	md = md.replace(/[\#]{1}(.+)/g, '<h1>$1</h1>');

	//alt h
	md = md.replace(/^(.+)\n\=+/gm, '<h1>$1</h1>');
	md = md.replace(/^(.+)\n\-+/gm, '<h2>$1</h2>');

	//images
	md = md.replace(/\!\[([^\]]+)\]\(([^\)]+)\)/g, '<img src="$2" alt="$1" />');

	//links
	md = md.replace(
		/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g,
		'<a href="$2" title="$4">$1</a>'
	);

	//font styles
	md = md.replace(/[\*\_]{2}([^\*\_]+)[\*\_]{2}/g, '<b>$1</b>');
	md = md.replace(/[\*\_]{1}([^\*\_]+)[\*\_]{1}/g, '<i>$1</i>');
	md = md.replace(/[\~]{2}([^\~]+)[\~]{2}/g, '<del>$1</del>');

	//pre
	md = md.replace(/^\s*\n\`\`\`(([^\s]+))?/gm, '<pre class="$2">');
	md = md.replace(/^\`\`\`\s*\n/gm, '</pre>\n\n');

	//code
	md = md.replace(/[\`]{1}([^\`]+)[\`]{1}/g, '<code>$1</code>');

	//p
	md = md.replace(/^\s*(\n)?(.+)/gm, function (m) {
		return /\<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p>' + m + '</p>';
	});

	//strip p from pre
	md = md.replace(/(\<pre.+\>)\s*\n\<p\>(.+)\<\/p\>/gm, '$1$2');

	return md;
}
