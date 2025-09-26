module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{js,jpg,webp,html,json,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};