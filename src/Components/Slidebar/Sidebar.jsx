import {motion} from "framer-motion";
import {NavLink} from "react-router-dom";
import styles from "./Sidebar.module.scss";
import {FaUserCircle} from "react-icons/fa";
import {IoClose} from "react-icons/io5";
import {useState} from "react";
import {FiLogIn} from "react-icons/fi";
import {IoCartSharp} from "react-icons/io5";
import {CgProfile} from "react-icons/cg";

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

const Sidebar = ({isOpen, onClose, onClick, toggleCart, toggleProfile}) => {
    const [userName] = useState("Your Name");

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
                    <MenuItem icon={<FiLogIn size={20} />} link="/login" onClick={onClose}>
                        Login
                    </MenuItem>
                    <MenuItem icon={<IoCartSharp size={20} />} onClick={toggleCart}>
                        Cart
                    </MenuItem>
                    <MenuItem icon={<CgProfile size={20} />} onClick={toggleProfile}>
                        View Profile
                    </MenuItem>
                </ul>
            </motion.div>
        </>
    );
};

const MenuItem = ({icon, children, link, onClick}) => {
    return (
        <motion.li whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}>
            {link ? (
                <NavLink to={link} onClick={onClick} className={styles.menuLink}>
                    <div className={styles.icons}>{icon}</div>
                    <span className={styles.iconDetail}>{children}</span>
                </NavLink>
            ) : (
                <button onClick={onClick} className={styles.menuButton}>
                    <div className={styles.icons}>{icon}</div>
                    <span className={styles.iconDetail}>{children}</span>
                </button>
            )}
        </motion.li>
    );
};

export default Sidebar;
