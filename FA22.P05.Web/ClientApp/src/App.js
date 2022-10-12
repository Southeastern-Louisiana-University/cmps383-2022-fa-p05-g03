import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar/NavBar";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
