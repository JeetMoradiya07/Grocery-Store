import {useState} from "react";
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar";
import styles from "./Navbar.module.scss";
import logo from "/src/assets/Images/WDP.png";
import {FaUserCircle} from "react-icons/fa"; // Importing FaUserCircle

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
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
                {/* Sidebar opens on clicking the profile icon */}
                <li className={styles.login}>
                    <FaUserCircle size={30} /> 
                </li>
            </ul>
            {/* Sidebar component should be rendered outside the ul */}
            <Sidebar isOpen={isSidebarOpen} onClick={openSidebar} onClose={closeSidebar} />
        </nav>
    );
};

export default Navbar;
