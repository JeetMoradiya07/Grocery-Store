import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.scss";
import logo from "/src/assets/Images/WDP.png";
import {FaUserCircle} from "react-icons/fa";
import {FaCartShopping} from "react-icons/fa6";
import Sidebar from "./Sidebar"; // Import Sidebar component

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const [user, setUser] = useState({name: "John Doe", pfp: null}); // Example user object
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to handle sidebar visibility

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        if (theme === "dark") {
            document.body.style.backgroundColor = "#030303";
            document.body.style.color = "#f5f5f5";
        } else {
            document.body.style.backgroundColor = "#f5f5f5";
            document.body.style.color = "#030303";
        }
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <nav className={styles.navbar}>
            <ul className={styles.logo}>
                <NavLink to="/">
                    <img src={logo} alt="Logo" />
                </NavLink>
            </ul>
            <ul className={styles.NavItems}>
                <li>
                    <NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/store" className={({isActive}) => (isActive ? styles.active : "")}>
                        Store
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : "")}>
                        About
                    </NavLink>
                </li>
                <li onClick={toggleSidebar}>
                    {" "}
                    {/* Clicking this will open the sidebar */}
                    <div className={styles.pfp}>
                        {user.pfp ? (
                            <img src={user.pfp} alt="User Profile" className={styles.userImage} />
                        ) : (
                            <FaUserCircle size={24} /> // Placeholder icon when no PFP
                        )}
                    </div>
                </li>
            </ul>

            {/* Sidebar component */}
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        </nav>
    );
};

export default Navbar;
