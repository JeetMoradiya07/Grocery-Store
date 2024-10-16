import styles from "./Cart_Product.module.scss";
// import pexels from "@/assets/pexels-karolina-grabowska-5650016.jpg";
import fernando from "@/assets/Images/fernando-andrade-potCPE-Cw8A-unsplash.jpg";
import { IoIosAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
export default function Cart_Product() {
    return (
        <>
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
                            <button>
                                <h4>Remove</h4>
                            </button>
                        </div>
                    </div>
                    <div className={[`${styles.product_name2}`]}>
                        <div className={[`${styles.product_quantity}`]}>
                            <div className={[`${styles.product_quantity_subtraction}`]}>
                                <GrFormSubtract />
                            </div>
                            <div className={[`${styles.product_quantity_show}`]}>
                                <h4>2</h4>
                            </div>
                            <div className={[`${styles.product_quantity_addition}`]}>
                                <IoIosAdd />
                            </div>
                        </div>
                        <div className={[`${styles.product_price}`]}>
                            <h4>$399</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
