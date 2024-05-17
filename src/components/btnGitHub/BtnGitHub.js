import "./style.css"
import gitHubIc from "./gitHub-black.svg"

const BtnGitHub = ({ link }) => {
	return (
		<a href={link} target="_blank" className="btn-outline">
			<img src={gitHubIc} alt="" />
			GitHub repo
		</a>
	);
}

export default BtnGitHub;