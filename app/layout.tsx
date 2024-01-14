import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { inter, roboto_mono } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,

	icons: {
		icon: "/favicon.ico"
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fr" className={`${inter.variable} ${roboto_mono.variable}`} suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased ",
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col min-h-screen dark:bg-slate-950 bg-indigo-50">
						<Navbar />
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow ">
							{children}
						</main>
						<footer className="w-full flex items-center justify-center py-3">
							<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href="https://github.com/SofRahmani"
								title="Sofiane Rahmani - Github"
							>
								<span className="text-default-600">Créé par</span>
								<p className="text-primary">Sofiane Rahmani</p>
							</Link>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
