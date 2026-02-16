import type { SkillId } from "./skillsList";

interface ProjectsList {
	title: string;
	skills: SkillId[];
	description: string;
	gitHubLink: string;
	projectLink: string;
	year: number;
	id: string;
}

const projects: ProjectsList[] = [
	{
		id: "Daily notes",
		title: "Daily notes",
		skills: ['html5', 'css5', 'ts', 'react'],
		description: "Daily Notes - a to-do list with drag-and-drop and status management. A simple task tracker with the ability to add, delete, and mark tasks as completed.",
		gitHubLink: "https://github.com/AnnaHelvetii/todo-app_react-ts",
		projectLink: "https://annahelvetii.github.io/todo-app_react-ts/",
		year: 2024
	},
	{	
		id: "In progress",
		title: "In progress",
		skills: ['ts', 'nextjs', 'redux'],
		description: "A new mini next.js project is in development.",
		gitHubLink: "https://github.com/AnnaHelvetii",
		projectLink: "",
		year: 2026
	},
];

export default projects;