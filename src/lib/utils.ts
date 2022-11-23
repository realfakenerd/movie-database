
/* A constant that is readonly. */
export const TMDB_URL: Readonly<string> = 'https://api.themoviedb.org/3';
/* A constant that is readonly. */
export const Img_URL: Readonly<string> = 'https://image.tmdb.org/t/p/';
/**
 * It takes a string in the format of MM-DD-YYYY and returns a string in the format of MM/DD/YYYY
 * @param {string} dateStr - the date string that we want to format
 * @returns A string with the date in the format of "MM/DD/YYYY"
 */
export function formatDate(dateStr: string) {
	const d = dateStr.split('-');
	if (d.length > 0) return d.reverse().join('/');
	else return 'no release date yet :(';
}
/**
 * It takes a number, formats it to a currency, and returns it as a string
 * @param {number} num - number - The number to format
 */
export const formatNumberToMoney = (num: number) =>
	new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	}).format(num);
/**
 * Return a random number between min and max, inclusive.
 * @param {number} min - The minimum number that can be returned.
 * @param {number} max - The maximum number to return.
 * @returns A random number between min and max.
 */
export function random(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * It loads a JSON file from a URL and returns the parsed JSON
 * @param {string} url - The URL to load.
 * @returns A Promise that resolves to the JSON representation of the response body.
 */
export async function load<T = any>(url: string): Promise<Awaited<T>> {
	const res = await fetch(url);
	return await res.json();
}


/**
 * It takes a string of Markdown and returns a string of HTML
 * @param {string} md - The markdown string to parse.
 * @returns A function that takes a string and returns a string.
 */
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
