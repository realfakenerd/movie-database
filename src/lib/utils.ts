export function formatDate(dateStr: string) {
	const d = dateStr.split('-');
	if (!d.includes('')) {
		const date = new Date(Date.UTC(parseInt(d[0]), parseInt(d[1]), parseInt(d[2]) + 1));
		const dateFormated = new Intl.DateTimeFormat('en-Us').format(date);
		return dateFormated;
	} else return 'no release date yet';
}
export const formatNumberToMoney = (num: number) =>
	new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	}).format(num);
