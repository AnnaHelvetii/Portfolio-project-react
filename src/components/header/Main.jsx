import "./main-page.css";
import projects from "../../helpers/projectsList";
import Project from "../project/Project";
import SocialIconsBlock from "../social-icons/SocialIconsBlock";
import BtnGitHub from "../btnGitHub/BtnGitHub";

const Main = ({ id }) => {
	return (
		<main className="main" id={id} >
			<div className="main__wrapper">
				<div className="section__greetings">
					<BtnGitHub 
						innerText='View GitHub profile'
						link='https://github.com/AnnaHelvetii'
					/>
					<h1 className="header__title">
						I'm <em>Anna</em>.<br/>Web developer
					</h1>
					<SocialIconsBlock />
				</div>
				<div className="projects-preview">
					<ul className="projects-preview__list">
						{projects.slice(0, 2).map((project, index) => (
							<li
								key={index}
								className={`projects-preview__item projects-preview__item--${index}`}
							>
								<Project 
									title={project.title}
									description={project.description}
									skills={project.skills}
									gitHubLink={project.gitHubLink}
									projectLink={project.projectLink}
									year={project.year}
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
		</main>
	);
}

export default Main;