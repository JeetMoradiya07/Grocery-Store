import React from "react";
import styles from "./Cart_Product.module.css";
// import pexels from "./assets/pexels-karolina-grabowska-5650016.jpg";
import fernando from "../../assets/Images/fernando-andrade-potCPE-Cw8A-unsplash.jpg";
export default function Cart_Product() {
    return (
        <>
            <div className={[`${styles.product_detail}`]}>
                <div className={[`${styles.product_img}`]}>
                <img src={fernando} alt="" />
                </div>
                <div className={[`${styles.product_info}`]}></div>
            </div>
        </>
    );
}
