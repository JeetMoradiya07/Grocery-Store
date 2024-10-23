import {Routes, Route, Navigate} from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import AboutPage from "./pages/AboutPage";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import Product from "./Components/Product/Product";

function App() {
    const isAuthenticated = !!localStorage.getItem("auth"); // Example of checking authentication status

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />

                {/* Protected Route Example */}
                <Route path="store" element={isAuthenticated ? <StorePage /> : <Navigate to="/login" />} />
                <Route path="product" element={isAuthenticated ? <Product /> : <Navigate to="/login" />} />

                {/* Catch-all route for 404 */}
                <Route path="*" element={<h2>404 - Not Found</h2>} />
            </Route>
        </Routes>
    );
}

export default App;
