import React, { useState } from "react";
import styles from "./Cart_Product.module.scss";
import fernando from "@/assets/Images/fernando-andrade-potCPE-Cw8A-unsplash.jpg";
import { IoIosAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import { MdDelete } from "react-icons/md";


export default function Cart_Product({ onUpdateQuantity, onRemove, index, initialQuantity = 1 }) {
    // Set up state for the product quantity
    const [number, setNumber] = useState(initialQuantity);
    const basePrice = 399;

    // Increment quantity
    const increment = () => {
        setNumber((prevNumber) => {
            const newQuantity = prevNumber + 1;
            onUpdateQuantity(index, newQuantity);
            return newQuantity;
        });
    };

    // Decrement quantity, ensuring it doesn't go below 1
    const decrement = () => {
        if (number > 1) {
            setNumber((prevNumber) => {
                const newQuantity = prevNumber - 1;
                onUpdateQuantity(index, newQuantity);
                return newQuantity;
            });
        }
    };

    // Remove the product
    const removeProduct = () => {
        onRemove(index);
    };

    const totalPrice = basePrice * number;

    return (
        <div className={styles.product_detail}>
            {/* <div className={styles.product_img}>
                <img className={styles.product_image} src={fernando} alt="Product" />
            </div>
            <div className={styles.product_info}>
                <div className={styles.product_data}>
                    <div className={styles.product_name}>
                        <h2>OUR LEGACY - With correction</h2>
                        <h4>Size - Medium</h4>
                    </div>
                </div>

                <div className={styles.product_name2}>
                    <div className={styles.product_quantity}>
                        <div className={styles.product_quantity_subtraction}>
                            {number > 1 ? (
                                <GrFormSubtract onClick={decrement} />
                            ) : (
                                <MdDelete onClick={removeProduct} className={styles.delete_icon} />
                            )}
                        </div>

                        <div className={styles.product_quantity_show}>
                            <h4>{number}</h4>
                        </div>

                        <div className={styles.product_quantity_addition}>
                            <IoIosAdd onClick={increment} />
                        </div>
                    </div>

                    <div className={styles.product_price}>
                        <h4>$ {totalPrice}</h4>
                    </div>
                </div>
            </div> */}

            
        </div>
    );
}
