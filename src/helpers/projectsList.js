import project1 from "./../img/projects/project__daily-notes.png";
import project1Big from "./../img/projects/project__daily-notes-Big.png"
import projectInProgress from "./../img/projects/project__in-progress.png";

const projects = [
	{
		title: "Daily notes",
		img: project1,
		imgBig: project1Big,
		skills: "React, TypeScript",
		description: 'Daily Notes - to-do list с Drag & Drop и управлением состоянием. Простой трекер для управления задачами, в котором реализована возможность добавления, удаления и маркировки задач как выполненных. Проект использует React и библиотеку React Beautiful DnD для плавного перетаскивания задач между списками "Выполнено" и "Невыполнено". Каждая задача сохраняется в localStorage, что позволяет сохранять изменения при перезагрузке страницы. Приложение имеет адаптивный интерфейс с настраиваемыми стилями и анимациями.',
		gitHubLink: "https://github.com/AnnaHelvetii/todo-app_react-ts",
	},
	{
		title: "In progress",
		img: projectInProgress,
		imgBig: projectInProgress,
		skills: "...coming soon",
		description: '',
		gitHubLink: "https://github.com/AnnaHelvetii",
	},
	{
		title: "In progress",
		img: projectInProgress,
		imgBig: projectInProgress,		
		skills: "...coming soon",
		description: '',
		gitHubLink: "https://github.com/AnnaHelvetii"
	},
];

export {projects}