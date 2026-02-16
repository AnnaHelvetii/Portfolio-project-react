import "./styles/main.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";
import SkillsSection from "./components/skills-section/SkillsSection";
import { ThemeProvider } from "./utils/ThemeContext";
import Marquee from "./components/marquee/Marquee";
import Pattern from "./components/Pattern";

function App() {
	return (
		<div className="App">
			<ThemeProvider>
				<Pattern />
				<div id="background__noisy"></div>
				<div className="gradient-default gradient-main"></div>
				<Navbar />
				<Home id="home" />
				<SkillsSection id="skills" />
				<Projects id="projects" />
				<Marquee text="React · Javascript · TypeScript · HTML · CSS · NextJS · " />
				<Contacts id="contacts" />
				<Footer />
			</ThemeProvider>
		</div>
	);
}

export default App;
