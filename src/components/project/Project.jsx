import "./project.css";
import { skillsIcons } from '../../helpers/skillsIcons';
import { useTheme } from '../../utils/ThemeContext';
import BtnGitHub from "../btnGitHub/BtnGitHub";
import { skillsMap } from "../../helpers/skillsList";

const Project = ({ id, title, skills=[], description, gitHubLink, projectLink, year }) => {
	const { theme } = useTheme();

	return (
		<div className="project-card">
			<div className="project-card__content">
				<div className="project-card__year"><span>{year}</span></div>
				<div className="project-card__description">
					<h3 className="project__title">{title}</h3>
					<p className="project-card__about">
						{description}
					</p>
				</div>
				<div className="project-card__tech-stack">
					<p className="tech-stack__title">Tech Stack</p>
					<ul className="tech-stack__list">
						{skills.map(skillId => {
							const skill = skillsMap[skillId];
							if(!skill) return null;

							return (
								<li className="tech-stack__item" key={skill.id}>
									<img
										src={skillsIcons[theme][skill.icon]}
										alt={skill.title}
										className="tech__icon"
									/>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="project-card__button-section">
					<a className="button-section__link" href={projectLink}>View project</a>
					<BtnGitHub innerText="GitHub repo" link={gitHubLink} />
				</div>
			</div>
		</div>
	);
}

export default Project;