import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Service from "./pages/Service";
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
