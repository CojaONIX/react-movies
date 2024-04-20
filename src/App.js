
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Navigation from "./Templates/Snippets/Navigation";

const App = () => {
    return (
        <>
            <Navigation />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/page2" element={<h1>Page2</h1>} />

                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
