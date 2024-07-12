import Footer from "./components/Footer";
import "./assets/styles/App.css";
import ResumeBuilder from "./components/resume/ResumeBuilder";

function App() {
	return (
		<div className="App">
			<ResumeBuilder></ResumeBuilder>
			<Footer></Footer>
		</div>
	);
}

export default App;
