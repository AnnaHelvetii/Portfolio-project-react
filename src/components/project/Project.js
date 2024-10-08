import "./project.css"

import { NavLink } from "react-router-dom";

const Project = ({title, img, index}) => {
	return (
		<NavLink to={`/project-page/${index}`}>
			<li className="project">
				<img src={img} alt={title} className="img__project"/>
				<h3 className="project__title">{title}</h3>
			</li>
		</NavLink>
	);
}

export default Project;