import React from "react";
import styles from "./Cart.module.scss";
import {IoClose} from "react-icons/io5";

export default function Cart({onClose}) {
    return (
        <>
            <div className={styles.overlay} onClick={onClose} /> {/* Overlay that closes the cart */}
            <div className={styles.Cart}>
                <button onClick={onClose} className={styles.closeButton}>
                    <IoClose />
                </button>

                <div className={styles.nev}>
                    <h2>Your Cart</h2>
                </div>
            </div>
        </>
    );
}
