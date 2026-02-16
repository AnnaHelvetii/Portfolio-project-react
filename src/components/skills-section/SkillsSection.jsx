import './skills-section.css';
import skills from '../../helpers/skillsList';
import { skillsIcons } from '../../helpers/skillsIcons';
import { useTheme } from '../../utils/ThemeContext';

const SkillsSection = ({ id }) => {
	const { theme } = useTheme();

	return (
		<section className="section" id={id} >
			<div className="gradient-default gradient-skills__1"></div>
			<div className="container">
				<h2 className="title-1">Skills</h2>
				<ul className="skills__list">
					{skills.map((skill) => (
						<li className="skills__item" key={skill.id}>
							<img 
								src={skillsIcons[theme][skill.icon]}
								alt={skill.title} 
								className="skills__icon"
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default SkillsSection;