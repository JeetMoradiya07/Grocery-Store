// Sidebar.jsx
import styles from "./Sidebar.module.scss"; 
import {IoClose} from "react-icons/io5";

const Sidebar = ({isOpen, onClose}) => {
    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
            <button onClick={onClose} className={styles.closeButton}>
                <IoClose />
            </button>
            <ul>
                <li>
                    <button className={styles.loginButton}>Login</button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
