import styles from "./Profile.module.scss";

export default function Profile({onClose}) {
    return (
        <>
            <div className={styles.overlay} onClick={onClose} /> {/* Overlay that closes the cart */}
            <div className={styles.Profile}></div>;
        </>
    );
}
