module.exports = {
	pwa: {
		name: 'Azat CV',
		themeColor: '#29A0D3',
		msTileColor: '#000000',
		appleMobileWebAppCapable: 'yes',
		appleMobileWebAppStatusBarStyle: 'black',

		manifestOptions: {
			name: 'Ufaboy CV',
			short_name: 'Azat CV',
			description: 'Looking good job',
			display: 'standalone',
			background_color: '#42B883',
			icons: [{'src': './img/icons/android-chrome-192x192.png', 'sizes': '192x192', 'type': 'image/png'},
				{'src': './img/icons/android-chrome-512x512.png', 'sizes': '512x512', 'type': 'image/png'},
				{'src': './img/icons/android-chrome-maskable-192x192.png', 'sizes': '192x192', 'type': 'image/png', 'purpose': 'maskable' },
				{'src': './img/icons/android-chrome-maskable-512x512.png', 'sizes': '512x512', 'type': 'image/png', 'purpose': 'maskable'
				}
			]
		},
	}
}