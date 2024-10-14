import React from "react";
import styles from "./Cart.module.scss";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Cart_Product from "./Cart_Product";

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
                        <div className={[`${styles.nev_cart}`]}>
                            <h2>Cart</h2>
                        </div>
                        <div className={[`${styles.nev_close}`]}>
                            <a href="">Close</a>
                        </div>
                    </div>
                    <Cart_Product/>
                </div>
            </div>
        </>
    );
}
