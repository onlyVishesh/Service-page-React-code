import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
    return (
        <div className="App">
            <Navbar />
            {/* Added your components between here*/}
            <Home />
            <Footer />
        </div>
    );
}

export default App;