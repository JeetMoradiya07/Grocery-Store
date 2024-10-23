import {useState} from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import AboutPage from "./pages/AboutPage";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import Product from "./Components/Product/Product";
import Error from "./Components/UI/Error";
import {QueryErrorResetBoundary} from "@tanstack/react-query";

function App() {
    const [errorMessages, setErrorMessages] = useState([]);
    const isAuthenticated = !!localStorage.getItem("auth");

    return (
        <>
            <QueryErrorResetBoundary>
                <Error messages={errorMessages} /> {/* Place Error here */}
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="about" element={<AboutPage />} />
                        <Route path="login" element={<Login setErrorMessages={setErrorMessages} />} />
                        <Route path="register" element={<Register setErrorMessages={setErrorMessages} />} />
                        <Route path="store" element={isAuthenticated ? <StorePage /> : <Navigate to="/login" />} />
                        <Route path="product" element={isAuthenticated ? <Product /> : <Navigate to="/login" />} />
                        <Route path="*" element={<h2>404 - Not Found</h2>} />
                    </Route>
                </Routes>
            </QueryErrorResetBoundary>
        </>
    );
}

export default App;
