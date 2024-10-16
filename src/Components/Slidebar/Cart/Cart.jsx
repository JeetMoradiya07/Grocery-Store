import styles from "./Cart.module.scss";
import Cart_Product from "./Cart_Product";

export default function Cart({ onClose }) {
    return (
        <>
            <div className={styles.overlay} onClick={onClose} /> {/* Overlay that closes the cart */}
            <div className={styles.Cart}>
                <div className="">
                    <div className={styles.nev}>
                        <h2>Cart</h2>
                        <button onClick={onClose}>Close</button>
                    </div>
                    <Cart_Product />
                    <Cart_Product />
                    <Cart_Product />
                </div>
                <div className={styles.payment}>
                    <div className={styles.delivery_checkout}>
                        <p>Delivery</p>
                        <p>Calculated at checkout</p>
                    </div>
                    <div className={styles.delivery_date}>
                        <p>
                            expected delivery date <b>Tomorrow</b>
                        </p>
                    </div>
                    <div className={styles.delivery_payment}>
                        <div className={styles.total}>
                            <p>
                                <b>Total</b>
                            </p>
                        </div>
                        <div>
                            <p>
                                <b>$ 1197</b>
                            </p>
                        </div>
                    </div>
                    <div className={styles.pay}>
                        <button>Go to Checkout</button>
                    </div>
                </div>
            </div>
        </>
    );
}
