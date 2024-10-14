import React from "react";
import styles from "./Cart.module.scss";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Cart() {
    return (
        <>
            <div className={styles.cart_wrapper}>
                <div className={[`${styles.Cart}`]}>
                    <NavLink to={"/"}>
                        <button className={styles.closeButton}>
                            <IoClose />
                        </button>
                    </NavLink>

                    <div className={[`${styles.nev}`]}>
                        <h2>Your Cart</h2>
                    </div>
                </div>
            </div>
        </>
    );
}
