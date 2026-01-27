import './skills-section.css';
import skills from '../../helpers/skillsList';
import { skillsIcons } from '../../helpers/skillsIcons';
import { useTheme } from '../../utils/ThemeContext';

const SkillsSection = () => {
	const { theme } = useTheme();

	return (
		<main className="section">
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
		</main>
	);
}

export default SkillsSection;