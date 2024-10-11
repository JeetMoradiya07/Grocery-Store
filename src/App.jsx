import {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import AboutPage from "./pages/AboutPage";
import Loading from "./Components/UI/Loading";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Trigger loading until the page and all resources are fully loaded
        const handlePageLoad = () => setLoading(false);

        // Attach the event listener for page load
        window.addEventListener("load", handlePageLoad);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener("load", handlePageLoad);
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="store" element={<StorePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
        </Routes>
    );
}

export default App;
