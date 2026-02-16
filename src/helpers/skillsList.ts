import type { skillsIcons } from "./skillsIcons";

interface Skills {
	id: string;
	title: string;
	icon: keyof typeof skillsIcons.dark; 
}

const skills: Skills[] = [
	{ id: 'html5', title: 'HTML', icon: 'html' },
	{ id: 'css5', title: 'CSS', icon: 'css' },
	{ id: 'js', title: 'JS', icon: 'javascript' },
	{ id: 'ts', title: 'TS', icon: 'typescript' },
	{ id: 'react', title: 'React', icon: 'react' },
	{ id: 'nextjs', title: 'NextJS', icon: 'nextjs' },
	{ id: 'redux', title: 'Redux', icon: 'redux' },
	{ id: 'angular', title: 'Angular', icon: 'angular' },
	{ id: 'jquery', title: 'JQuery', icon: 'jquery' },
	{ id: 'bootstrap', title: 'Bootstrap', icon: 'bootstrap' },
	{ id: 'tailwindcss', title: 'Tailwind CSS', icon: 'tailwindcss' },
	{ id: 'git', title: 'Git', icon: 'git' },
	{ id: 'github', title: 'GitHub', icon: 'github' },
	{ id: 'gitlab', title: 'GitLab', icon: 'gitlab' },
	{ id: 'mysql', title: 'MySQL', icon: 'mysql' },
	{ id: 'mongodb', title: 'MongoDB', icon: 'mongodb' },
	{ id: 'figma', title: 'Figma', icon: 'figma' }
];

export type SkillId = typeof skills[number]['id'];

export const skillsMap = Object.fromEntries(
	skills.map(skill => [skill.id, skill])
);

export default skills;