import React, { useState } from "react";
import styles from "./Cart.module.scss";
import Cart_Product from "./Cart_Product";
import empty from "../../../assets/empty.mp4";

export default function Cart({ onClose }) {
    // Step 1: Set up state for managing cart products
    const [products, setProducts] = useState([
        { id: 1, quantity: 1, price: 399 },
        { id: 2, quantity: 1, price: 399 },
        { id: 3, quantity: 1, price: 399 },
    ]);

    // Step 2: Handle updating quantity for a product
    const updateQuantity = (index, newQuantity) => {
        const updatedProducts = [...products];
        updatedProducts[index].quantity = newQuantity;
        setProducts(updatedProducts);
    };

    // Step 3: Handle removing a product
    const removeProduct = (index) => {
        const updatedProducts = products.filter((_, i) => i !== index);
        setProducts(updatedProducts);
    };

    // Step 4: Calculate the overall total price for the cart
    const totalPrice = products.reduce((sum, product) => sum + product.quantity * product.price, 0);

    return (
        <>
            <div className={styles.overlay} onClick={onClose} />
            <div className={styles.Cart}>
                <div className="">
                    <div className={styles.nev}>
                        <h2>Cart</h2>
                        <button onClick={onClose}>Close</button>
                    </div>
                    {/* Render Cart_Product components dynamically */}
                    {products.map((product, index) => (
                        <Cart_Product
                            key={product.id}
                            index={index}
                            initialQuantity={product.quantity}
                            onUpdateQuantity={updateQuantity}
                            onRemove={removeProduct}
                        />
                    ))}
                </div>
                {/* <div className={styles.payment}>
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
                                <b>$ {totalPrice}</b>
                            </p>
                        </div>
                    </div>
                    <div className={styles.pay}>
                        <button>Go to Checkout</button>
                    </div>
                </div> */}
                <div className={styles.Cart_video}>
                    <video className={styles.Cart_video_item} src={empty} autoPlay muted loop></video>
                </div>
            </div>
        </>
    );
}
