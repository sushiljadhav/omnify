/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
		colors: {
			primary: "#F8FAFC",
			secondary: "#FFFFFF",
			textColor: "#334155",
			textSecondaryColor: "#0F172A",
			textThirdColor: "#64748B",
			boxColor: "#F1F5F9",
			headTextColor: "#262626",
		},
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		fontFamily: {
			geist: ["var(--font-geist-sans)"],
			poppins: ["var(--poppins)"],
			Helvetica_Neue_Medium: ["var(--Helvetica-Neue-Medium)"],
			Helvetica_Neue_Bold: ["var(--Helvetica-Neue-Medium-Bold)"],
		},
		fontSize: {
			xxs: ["10px", "16px"],
			xs: ["12px", "20px"],
			sm: ["14px", "20px"],
			base: ["16px", "24px"],
			md: ["18px", "24px"],
			lg: ["20px", "28px"],
			xl: ["24px", "32px"],
		},
	},
	plugins: [],
};
