import { GeistSans } from "geist/font/sans";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const Helvetica_Neue_Medium = localFont({
	src: "../fonts/HelveticaNeueMedium.ttf",
	variable: "--Helvetica-Neue-Medium",
});

const Helvetica_Neue_Bold = localFont({
	src: "../fonts/HelveticaNeueBold.ttf",
	variable: "--Helvetica-Neue-Medium-Bold",
});

const poppins = Poppins({
	variable: "--poppins",
	subsets: ["latin"],
	weight: ["400", "500", "700"],
});

export const metadata = {
	title: "Front Desk",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`box-border ${GeistSans.className} ${poppins.variable} ${Helvetica_Neue_Medium.variable} ${Helvetica_Neue_Bold.variable} bg-primary`}
			>
				{children}
			</body>
		</html>
	);
}
