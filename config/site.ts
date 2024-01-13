export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Cana'Life",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Accueil",
			href: "/",
		},
    {
      label: "Canada",
      href: "/canada",
    },
    {
      label: "Programmation",
      href: "/programmation",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/SofRahmani",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
