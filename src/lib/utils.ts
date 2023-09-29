type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];
export function formatDate(date: string | Date, dateStyle: DateStyle = 'medium', locale = 'en') {
	if (!date) return 'no date :(';

	const formatter = new Intl.DateTimeFormat(locale, { dateStyle });
	return formatter.format(new Date(date));
}

export function capitalize(word: string) {
	return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export function getImagePath(type: keyof Images, size: number, path: string, config: Config) {
	const secure_base_url = 'https://image.tmdb.org/t/p/';
	const { images } = config;
	const imgType = images[type];
	const imgSize = imgType[size];

	return `${secure_base_url}${imgSize}${path}`;
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

export async function fetchAll<T>(...fetchs: T[]) {
	return Promise.all(fetchs);
}

const animationTimingFunction = 'cubic-bezier(0.291, 0.281, 0, 1.2)';
const initialBottomValue = ['0px 0px', '6rem'];
const scrolledDownBottomValue = ['0px 80px', '0 1rem'];

type DebounceFunction = (...args: unknown[]) => void;
function debounce(fn: DebounceFunction, delay: number) {
	let timer: ReturnType<typeof setTimeout>;

	return (...args: unknown[]) => {
		if (timer) clearTimeout(timer);

		timer = setTimeout(() => {
			fn(...args);
		}, delay);
	};
}

/**
 * The `handleScroll` function adjusts the position of a node and a floating action button based on the
 * scroll direction.
 * @param {HTMLElement} node - The `node` parameter is an HTMLElement that represents the element whose
 * position will be adjusted based on the scroll direction.
 * @param {HTMLElement} [fab] - The `fab` parameter is an optional parameter that represents a floating
 * action button. It is of type `HTMLElement`, which means it can be any HTML element. If a `fab`
 * element is provided, the function will adjust its position based on the scroll direction. If no
 * `fab` element is
 */
export function handleScroll(node: HTMLElement, fab?: HTMLElement) {
	let lastScrollTop = 0;

	node.style.animationTimingFunction = animationTimingFunction;
	node.style.translate = initialBottomValue[0];
	if (fab) fab.style.animationTimingFunction = animationTimingFunction;

	/**
	 * The function updates the scroll position and adjusts the position of a node and a floating action
	 * button based on the scroll direction.
	 */
	function updateScroll() {
		const scrollTop = window.scrollY || document.documentElement.scrollTop;
		const isScrollingDown = scrollTop > lastScrollTop;
		node.style.translate = isScrollingDown ? scrolledDownBottomValue[0] : initialBottomValue[0];

		if (fab)
			fab.style.translate = isScrollingDown ? scrolledDownBottomValue[1] : initialBottomValue[1];
		lastScrollTop = scrollTop;
	}

	addEventListener('scroll', debounce(updateScroll, 100), { passive: true });
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
