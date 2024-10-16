import styles from "./Cart.module.scss";
import Cart_Product from "./Cart_Product";

export default function Cart({onClose}) {
    return (
        <>
            <div className={styles.overlay} onClick={onClose} /> {/* Overlay that closes the cart */}
            <div className={styles.Cart}>
                <div className={styles.nev}>
                    <h2>Cart</h2>
                    <button onClick={onClose}>Close</button>
                </div>
                <Cart_Product />
            </div>
        </>
    );
}
