import logo from "./logo.svg";
import "./App.css";
import { MyNavbar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<section>
			<MyNavbar />
			<Banner />
			<Skills />
		</section>
	);
}

export default App;
