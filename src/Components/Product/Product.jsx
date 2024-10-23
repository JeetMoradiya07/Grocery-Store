import styles from "./Product.module.scss";
import { Button, Rating } from '@mui/material';

export default function Product() {
    const TitleName = 'kano'
    const Price = '$29.35'
    const Pera = 'lorem'
    return <div className={styles.Product}>
        <div className={styles.container}>
            <div className={styles.container_main}>
                <div className={styles.container_img}>
                    <img
                        src="https://picsum.photos/200"
                        alt=""
                        className={styles.productImage}
                    />
                </div>
                <div className={styles.container_details}>
                    <h1 className={styles.container_title}>{TitleName}</h1>
                    <section className={styles.description}>{Pera}</section>
                    <label>price : {Price}</label>
                    <div className={styles.container_reting}>
                        Reviews : <Rating name="half-rating-read" defaultValue={4.9} precision={0.5} readOnly />
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            className={styles.addToCart}
                        >
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>

        </div>  
    </div>;
}
