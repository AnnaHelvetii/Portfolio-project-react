import "./styles/main.css"

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/Home"
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import ProjectPage from "./pages/ProjectPage";

function App() {
	return (
		<div className="App">

			<Navbar />

			{/* <Home /> */}

			{/* <Projects /> */}

			{/* <Contacts/> */}

			<ProjectPage/>

			<Footer />

		</div>
	);
}

export default App;
