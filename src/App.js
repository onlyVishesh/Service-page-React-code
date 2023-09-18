import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Service from "./components/Service";

function App() {
    return (
        <div className="App">
            <Navbar />
            {/* Added your components between here*/}
            <Service />
            <Footer />
        </div>
    );
}

export default App;
