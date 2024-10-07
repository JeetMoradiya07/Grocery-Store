import {Routes, Route} from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import AboutPage from "./pages/AboutPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="store" element={<StorePage />} />
                <Route path="about" element={<AboutPage />} />
            </Route>
        </Routes>
    );
}

export default App;
