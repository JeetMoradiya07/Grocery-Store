import React, {useEffect, useState} from "react";
import styles from "./Cart.module.scss";
import Cart_Product from "./Cart_Product";
import {fetchCart} from "@/Store/api.js";
import empty from "../../../assets/empty.mp4";

export default function Cart({onClose}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getCart = async () => {
            try {
                const cartData = await fetchCart();
                setProducts(cartData); // cartData is now an array of products
            } catch (error) {
                console.error("Error fetching cart:", error);
            }
        };

        getCart();
    }, []);

    const updateQuantity = (index, newQuantity) => {
        const updatedProducts = [...products];
        updatedProducts[index].quantity = newQuantity;
        setProducts(updatedProducts);
    };

    const removeProduct = (index) => {
        const updatedProducts = products.filter((_, i) => i !== index);
        setProducts(updatedProducts);
    };

    const totalPrice = products.reduce((sum, product) => sum + product.quantity * product.price, 0);

    return (
        <>
            <div className={styles.overlay} onClick={onClose} />
            <div className={styles.Cart}>
                <div>
                    <div className={styles.nev}>
                        <h2>Cart</h2>
                        <button onClick={onClose}>Close</button>
                    </div>
                    <div>
                        {products.length > 0 ? (
                            products.map((product, index) => (
                                <Cart_Product
                                    key={product.id}
                                    index={index}
                                    initialQuantity={product.quantity}
                                    title={product.title} // Pass title
                                    price={product.price} // Pass price
                                    image={product.image} // Pass image
                                    onUpdateQuantity={updateQuantity}
                                    onRemove={removeProduct}
                                />
                            ))
                        ) : (
                            <div className={styles.Cart_video}>
                                <video className={styles.Cart_video_item} src={empty} autoPlay muted loop></video>
                            </div>
                        )}
                    </div>
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
                                <b>$ {totalPrice}</b>
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
