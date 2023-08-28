import logo from "./logo.svg";
import "./App.css";
import { MyNavbar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<section>
			<MyNavbar />
			<Banner />
		</section>
	);
}

export default App;
