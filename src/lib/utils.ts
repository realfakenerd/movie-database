import { DateTime } from 'luxon';

export const formatDate = (date: string) =>
	// @ts-ignore
	DateTime.local(date.split('-')).toLocaleString(DateTime.DATE_SHORT);

export const formatNumberToMoney = (num: number) =>
	new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	}).format(num);
