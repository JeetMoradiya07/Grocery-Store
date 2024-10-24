import React, {useState} from "react";
import styles from "./Cart_Product.module.scss";
import {IoIosAdd} from "react-icons/io";
import {GrFormSubtract} from "react-icons/gr";
import {MdDelete} from "react-icons/md";

export default function Cart_Product({onUpdateQuantity, onRemove, index, initialQuantity = 1, title, price, image}) {
    const [number, setNumber] = useState(initialQuantity);

    const increment = () => {
        setNumber((prevNumber) => {
            const newQuantity = prevNumber + 1;
            onUpdateQuantity(index, newQuantity);
            return newQuantity;
        });
    };

    const decrement = () => {
        if (number > 1) {
            setNumber((prevNumber) => {
                const newQuantity = prevNumber - 1;
                onUpdateQuantity(index, newQuantity);
                return newQuantity;
            });
        }
    };

    const removeProduct = () => {
        onRemove(index);
    };

    const totalPrice = price * number;

    return (
        <div className={styles.product_detail}>
            <div className={styles.product_img}>
                <img className={styles.product_image} src={image} alt={title} />
            </div>
            <div className={styles.product_info}>
                <div className={styles.product_data}>
                    <div className={styles.product_name}>
                        <h2>{title}</h2>
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
                        <h4>$ {totalPrice.toFixed(2)}</h4> {/* Dynamic total price */}
                    </div>
                </div>
            </div>
        </div>
    );
}
