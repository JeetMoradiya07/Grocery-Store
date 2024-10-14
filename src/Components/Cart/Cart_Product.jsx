import React from 'react'
import styles from './Cart_Product.module.css'
import pexels from './assets/pexels-karolina-grabowska-5650016.jpg'
export default function Cart_Product() {
  return (
    <>
        <div className={[`${styles.cart_product}`]} >
            <div className={[`${styles.photo}`]} >
                <img src={pexels} alt="img" />
            </div>
            <div></div>
        </div>
    </>
  )
}
