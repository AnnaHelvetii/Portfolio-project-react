import "./main-page.css";
import { projects } from "../../helpers/projectsList";
import Project from "../project/Project";
import { useTheme } from "../../utils/ThemeContext";
import { socialIcons } from "../../helpers/socialsList";
import socialsList from "../../helpers/socialsList";

const Main = () => {
	const { theme } = useTheme();
	const gitHubWhite = "/img/socials-icons/dark/github.svg";
	const gitHubBlack = "/img/socials-icons/light/github.svg";
	const gitHubIconSrc = theme === 'dark' ? gitHubWhite : gitHubBlack;

	return (
		<main className="main">
			<div className="main__wrapper">
				<div className="section__greetings">
					<a 
						href="https://github.com/AnnaHelvetii" 
						target="_blank" 
						rel="noreferrer" 
						className="btn btn-github">
							View GitHub profile
						<img src={gitHubIconSrc} alt="" />
					</a>
					<h1 className="header__title">
						<strong>I'm <em>Anna</em>.<br/>Web developer</strong>
					</h1>
					<ul className="social">
						{socialsList.map(social => (
							<li className="social__item btn btn-social" key={social.id}>
								<a href={social.href} target="_blank" rel="noreferrer">
									<img src={socialIcons[theme][social.icon]} alt="link" />
								</a>
							</li>
						))}
					</ul>
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
									img={project.img} 
									index={index}
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