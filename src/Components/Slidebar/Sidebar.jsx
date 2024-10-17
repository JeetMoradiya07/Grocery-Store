import {motion} from "framer-motion";
import {NavLink} from "react-router-dom";
import styles from "./Sidebar.module.scss";
import {FaUserCircle} from "react-icons/fa";
import {IoClose} from "react-icons/io5";
import {useState} from "react";

const sidebarVariants = {
    open: {
        clipPath: `circle(1500px at calc(100% - 40px) 40px)`,
        transition: {
            type: "spring",
            stiffness: 30,
            restDelta: 2,
        },
    },
    closed: {
        clipPath: "circle(16px at calc(100% - 65px) 40px)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

const pfpVariants = {
    open: {
        top: "20px",
        right: "50%",
        transform: "translateX(50%)",
        zoom: 3,
    },
    closed: {
        top: "25px",
        right: "50px",
        transform: "translateX(0)",
        zoom: 1,
    },
};

const Sidebar = ({isOpen, onClose, onClick, cartIsOpen, toggleCart, profileIsOpen, toggleProfile}) => {
    const [userName, setuserName] = useState("Your Name");

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
                <div className={styles.pfpWrapper}>
                    <motion.div className={styles.pfp} onClick={onClick} variants={pfpVariants} animate={isOpen ? "open" : "closed"}>
                        <FaUserCircle size={30} />
                    </motion.div>
                    <div className={styles.userName}>
                        <h2>{userName}</h2>
                    </div>
                </div>
                {isOpen && (
                    <button onClick={onClose} className={styles.closeButton}>
                        <IoClose />
                    </button>
                )}
                <ul className={styles.menu_items}>
                    <li className={styles.menu_item}>
                        <NavLink to="/login" onClick={onClose}>
                            <button className={styles.Button}>Login</button>
                        </NavLink>
                    </li>
                    <li className={styles.menu_item}>
                        <button className={styles.Button} onClick={toggleCart}>
                            Cart
                        </button>
                    </li>
                    <li className={styles.menu_item}>
                        <button className={styles.Button} onClick={toggleProfile}>
                            View Profile
                        </button>
                    </li>
                    <li className={styles.menu_item}>
                        <NavLink to="/setting" onClick={onClose}>
                            <button className={styles.Button}>Setting</button>
                        </NavLink>
                    </li>
                </ul>
            </motion.div>
        </>
    );
};

export default Sidebar;
