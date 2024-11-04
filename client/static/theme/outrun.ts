
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const outrunTheme: CustomThemeConfig = {
    name: 'outrun-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "16px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #813dae 
		"--color-primary-50": "236 226 243", // #ece2f3
		"--color-primary-100": "230 216 239", // #e6d8ef
		"--color-primary-200": "224 207 235", // #e0cfeb
		"--color-primary-300": "205 177 223", // #cdb1df
		"--color-primary-400": "167 119 198", // #a777c6
		"--color-primary-500": "129 61 174", // #813dae
		"--color-primary-600": "116 55 157", // #74379d
		"--color-primary-700": "97 46 131", // #612e83
		"--color-primary-800": "77 37 104", // #4d2568
		"--color-primary-900": "63 30 85", // #3f1e55
		// secondary | #e88c7d 
		"--color-secondary-50": "252 238 236", // #fceeec
		"--color-secondary-100": "250 232 229", // #fae8e5
		"--color-secondary-200": "249 226 223", // #f9e2df
		"--color-secondary-300": "246 209 203", // #f6d1cb
		"--color-secondary-400": "239 175 164", // #efafa4
		"--color-secondary-500": "232 140 125", // #e88c7d
		"--color-secondary-600": "209 126 113", // #d17e71
		"--color-secondary-700": "174 105 94", // #ae695e
		"--color-secondary-800": "139 84 75", // #8b544b
		"--color-secondary-900": "114 69 61", // #72453d
		// tertiary | #5b98b9 
		"--color-tertiary-50": "230 240 245", // #e6f0f5
		"--color-tertiary-100": "222 234 241", // #deeaf1
		"--color-tertiary-200": "214 229 238", // #d6e5ee
		"--color-tertiary-300": "189 214 227", // #bdd6e3
		"--color-tertiary-400": "140 183 206", // #8cb7ce
		"--color-tertiary-500": "91 152 185", // #5b98b9
		"--color-tertiary-600": "82 137 167", // #5289a7
		"--color-tertiary-700": "68 114 139", // #44728b
		"--color-tertiary-800": "55 91 111", // #375b6f
		"--color-tertiary-900": "45 74 91", // #2d4a5b
		// success | #5dd070 
		"--color-success-50": "231 248 234", // #e7f8ea
		"--color-success-100": "223 246 226", // #dff6e2
		"--color-success-200": "215 243 219", // #d7f3db
		"--color-success-300": "190 236 198", // #beecc6
		"--color-success-400": "142 222 155", // #8ede9b
		"--color-success-500": "93 208 112", // #5dd070
		"--color-success-600": "84 187 101", // #54bb65
		"--color-success-700": "70 156 84", // #469c54
		"--color-success-800": "56 125 67", // #387d43
		"--color-success-900": "46 102 55", // #2e6637
		// warning | #EBBB4C 
		"--color-warning-50": "252 245 228", // #fcf5e4
		"--color-warning-100": "251 241 219", // #fbf1db
		"--color-warning-200": "250 238 210", // #faeed2
		"--color-warning-300": "247 228 183", // #f7e4b7
		"--color-warning-400": "241 207 130", // #f1cf82
		"--color-warning-500": "235 187 76", // #EBBB4C
		"--color-warning-600": "212 168 68", // #d4a844
		"--color-warning-700": "176 140 57", // #b08c39
		"--color-warning-800": "141 112 46", // #8d702e
		"--color-warning-900": "115 92 37", // #735c25
		// error | #db3d4a 
		"--color-error-50": "250 226 228", // #fae2e4
		"--color-error-100": "248 216 219", // #f8d8db
		"--color-error-200": "246 207 210", // #f6cfd2
		"--color-error-300": "241 177 183", // #f1b1b7
		"--color-error-400": "230 119 128", // #e67780
		"--color-error-500": "219 61 74", // #db3d4a
		"--color-error-600": "197 55 67", // #c53743
		"--color-error-700": "164 46 56", // #a42e38
		"--color-error-800": "131 37 44", // #83252c
		"--color-error-900": "107 30 36", // #6b1e24
		// surface | #495A8F 
		"--color-surface-50": "228 230 238", // #e4e6ee
		"--color-surface-100": "219 222 233", // #dbdee9
		"--color-surface-200": "210 214 227", // #d2d6e3
		"--color-surface-300": "182 189 210", // #b6bdd2
		"--color-surface-400": "128 140 177", // #808cb1
		"--color-surface-500": "73 90 143", // #495A8F
		"--color-surface-600": "66 81 129", // #425181
		"--color-surface-700": "55 68 107", // #37446b
		"--color-surface-800": "44 54 86", // #2c3656
		"--color-surface-900": "36 44 70", // #242c46
			
		}
	}