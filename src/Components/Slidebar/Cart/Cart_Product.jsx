import styles from "./Cart_Product.module.scss";
import fernando from "@/assets/Images/fernando-andrade-potCPE-Cw8A-unsplash.jpg";
import { IoIosAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import React, { useState } from "react";

export default function Cart_Product() {
    // Step 1: Set up state for the product quantity and visibility
    const [number, setNumber] = useState(1); // Start with quantity 1
    const [isRemoved, setIsRemoved] = useState(false); // State to track product visibility
    const basePrice = 399; // Base price of the product

    // Step 2: Define increment and decrement functions
    const increment = () => {
        setNumber((prevNumber) => prevNumber + 1);
    };

    const decrement = () => {
        if (number > 1) {
            // Ensure quantity doesn't go below 1
            setNumber((prevNumber) => prevNumber - 1);
        }
    };

    // Step 3: Calculate total price based on quantity
    const totalPrice = basePrice * number;

    // Step 4: Define remove function
    const removeProduct = () => {
        setIsRemoved(true); // Set isRemoved to true to hide the product
    };

    return (
        <>
            {/* Conditionally render the product if it hasn't been removed */}
            {!isRemoved && (
                <div className={[`${styles.product_detail}`]}>
                    <div className={[`${styles.product_img}`]}>
                        <img className={[`${styles.product_image}`]} src={fernando} alt="" />
                    </div>
                    <div className={[`${styles.product_info}`]}>
                        <div className={[`${styles.product_data}`]}>
                            <div className={[`${styles.product_name}`]}>
                                <h2>OUR LEGACY - With correction</h2>
                                <h4>Size - Medium</h4>
                            </div>
                            <div className={[`${styles.product_remove}`]}>
                                <button onClick={removeProduct}>
                                    {" "}
                                    {/* Attach the remove function */}
                                    <h4>Remove</h4>
                                </button>
                            </div>
                        </div>
                        <div className={[`${styles.product_name2}`]}>
                            <div className={[`${styles.product_quantity}`]}>
                                <div className={[`${styles.product_quantity_subtraction}`]}>
                                    <GrFormSubtract onClick={decrement} />
                                </div>
                                <div className={[`${styles.product_quantity_show}`]}>
                                    <h4>{number}</h4> {/* Display dynamic number */}
                                </div>
                                <div className={[`${styles.product_quantity_addition}`]}>
                                    <IoIosAdd onClick={increment} />
                                </div>
                            </div>
                            <div className={[`${styles.product_price}`]}>
                                <h4>$ {totalPrice}</h4> {/* Display dynamic total price */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
