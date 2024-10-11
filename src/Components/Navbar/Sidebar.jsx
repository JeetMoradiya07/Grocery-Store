import {motion} from "framer-motion";
import {NavLink} from "react-router-dom";
import styles from "./Sidebar.module.scss";
import {FaUserCircle} from "react-icons/fa";
import {IoClose} from "react-icons/io5";

const sidebarVariants = {
    open: {
        clipPath: `circle(1000px at calc(100% - 40px) 40px)`,
        transition: {
            type: "spring",
            stiffness: 30,
            restDelta: 2,
        },
    },
    closed: {
        clipPath: "circle(16px at calc(100% - 65px) 45px)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

const pfpVariants = {
    open: {
        top: "25px", // Set top to 50px when opened
        right: "50%",
        transform: "translateX(50%)",
        zoom: 2,
        transition: {type: "spring", stiffness: 100},
    },
    closed: {
        top: "30px", // Default position when closed
        right: "50px",
        transform: "translateX(0)",
        zoom: 1,
        transition: {type: "spring", stiffness: 100},
    },
};

const Sidebar = ({isOpen, onClose, onClick}) => {
    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    const handleOverlayClick = () => {
        onClose();
    };

    return (
        <>
            {isOpen && <div className={styles.overlay} onClick={handleOverlayClick} />}
            <motion.div
                className={styles.sidebar}
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={sidebarVariants}
                onClick={stopPropagation}
            >
                <motion.div className={styles.pfp} onClick={onClick} variants={pfpVariants} animate={isOpen ? "open" : "closed"}>
                    <FaUserCircle size={30} />
                </motion.div>
                {isOpen && (
                    <button onClick={onClose} className={styles.closeButton}>
                        <IoClose />
                    </button>
                )}
                <ul>
                    <li>
                        <NavLink to="/login" onClick={onClose} className={({isActive}) => `${isActive ? styles.active : ""} ${styles.loginButton}`}>
                            Login
                        </NavLink>
                    </li>
                </ul>
            </motion.div>
        </>
    );
};

export default Sidebar;
