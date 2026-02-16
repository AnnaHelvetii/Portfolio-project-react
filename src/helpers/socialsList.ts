export const socialIcons = {
	dark: {
		tg: '/img/socials-icons/dark/telegram.svg',
		vk: '/img/socials-icons/dark/vk.svg',
		instagram: '/img/socials-icons/dark/instagram.svg',
		github: '/img/socials-icons/dark/github.svg',
	},
	light: {
		tg: '/img/socials-icons/light/telegram.svg',
		vk: '/img/socials-icons/light/vk.svg',
		instagram: '/img/socials-icons/light/instagram.svg',
		github: '/img/socials-icons/light/github.svg',
	}
};

interface SocialsList {
	id: string;
	title?: string;
	icon: keyof typeof socialIcons.dark;
	href: string;
};

export const socialsList: SocialsList[] = [
	{ id: 'telegram', title: 'Telegram', icon: 'tg', href: 'https://t.me/anna_helvetii' },
	{ id: 'vk', title: 'VK', icon: 'vk', href: 'https://vk.com/we_are_helvetios' },
	{ id: 'instagram', title: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/anna_helvetii' },
	{ id: 'githubLink', title: 'GitHub', icon: 'github', href: 'https://github.com/AnnaHelvetii' },
];