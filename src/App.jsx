import "./styles/main.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";
import SkillsSection from "./components/skills-section/SkillsSection";
import { ThemeProvider } from "./utils/ThemeContext";
// import ProjectPage from "./pages/ProjectPage";
// import ScrollToTop from "./utils/scrollToTop";

function App() {
	return (
		<div className="App">
			<div id="background__noisy"></div>
			<div className="gradient-experience__1 "></div>
			{/* <ScrollToTop /> */}
			<ThemeProvider>
				<Navbar />
				<Home />
				<SkillsSection />
				<Projects />
				<Contacts />
				<Footer />
			</ThemeProvider>
		</div>
	);
}

export default App;
