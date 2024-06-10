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
			textFourthColor: "#18181B",
			boxColor: "#F1F5F9",
			headTextColor: "#262626",
			inputColor: "#94A3B8",
			tableBorderColor: "#E2E8F0",
			checkBoxBorderColor: "E5E7EB",
			tableDataColor: "#374151",
			rowBorderColor: "#EBEEF0",
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
		boxShadow: {
			smStrong:
				"0px 1px 2px -1px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(16, 24, 40, 0.1)",
			checkBoxShadow:
				"0px 1px 2px 0px #64748B1A, 0px 1px 1px 0px #64748B0F",
		},
	},
	plugins: [],
};
