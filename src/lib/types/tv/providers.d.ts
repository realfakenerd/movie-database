interface TvWatchProvider {
	id: number;
	results?: Record<Results, ProviderData>;
}

declare const enum Results {
	AG = 'AG',
	AR = 'AR',
	AU = 'AU',
	BB = 'BB',
	BM = 'BM',
	BO = 'BO',
	BR = 'BR',
	BS = 'BS',
	BZ = 'BZ',
	CA = 'CA',
	CL = 'CL',
	CO = 'CO',
	CR = 'CR',
	DO = 'DO',
	EC = 'EC',
	ES = 'ES',
	FR = 'FR',
	GF = 'GF',
	GT = 'GT',
	GY = 'GY',
	HN = 'HN',
	JM = 'JM',
	JP = 'JP',
	KR = 'KR',
	MX = 'MX',
	NI = 'NI',
	NL = 'NL',
	NZ = 'NZ',
	PA = 'PA',
	PE = 'PE',
	PY = 'PY',
	SV = 'SV',
	TH = 'TH',
	TT = 'TT',
	US = 'US',
	UY = 'UY',
	VE = 'VE'
}

interface ProviderData {
	link: string;
	flatrate: Logo[];
	ads?: Logo[];
	buy?: Logo[];
	rent?: Logo[];
	free?: Logo[];
}

interface Logo {
	logo_path: string;
	provider_id: number;
	provider_name: string;
	display_priority: number;
}
