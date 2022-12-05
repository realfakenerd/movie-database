import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	use: {
		headless: false
	},
	testDir: 'tests',
	fullyParallel: true
};

export default config;
