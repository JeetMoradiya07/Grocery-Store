import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet /> {/* This renders the child route elements */}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
