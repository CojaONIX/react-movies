
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Navigation from "./Templates/Snippets/Navigation";
import Footer from "./Templates/Snippets/Footer";
import Details from "./Pages/Details";

const App = () => {
    return (
        <>
            <Navigation />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/details/:imdbID" element={<Details />} />

                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
