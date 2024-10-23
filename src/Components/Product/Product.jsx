import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import styles from "./Product.module.scss";
import {Button, Rating} from "@mui/material";
import {fetchProductById} from "../../Store/api.js"; // Create a new function to fetch by ID
import Loading from "../UI/Loading.jsx";
import Navbar from "../Navbar/Navbar.jsx";

export default function Product() {
    const {id} = useParams(); // Get the product ID from the URL

    // Fetch product details using react-query
    const {
        data: product,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["product", id], // Query key that includes product ID
        queryFn: () => fetchProductById(id), // Fetch product by ID
    });

    if (isLoading) return <Loading />;
    if (isError) return <div>Error loading product details</div>;

    return (
        <>
            <Navbar />
            <div className={styles.Product}>
                <div className={styles.container}>
                    <div className={styles.container_main}>
                        <div className={styles.container_img}>
                            <img src={product.image} alt={product.title} />
                        </div>
                        <div className={styles.container_details}>
                            <h1 className={styles.container_title}>{product.title}</h1>
                            <section className={styles.description}>{product.description}</section>
                            <label>Price: ${product.price}</label>
                            <div className={styles.container_rating}>
                                Reviews: <Rating name="half-rating-read" defaultValue={product.rating.rate} precision={0.5} readOnly />
                            </div>
                            <div>
                                <Button variant="contained" color="primary" className={styles.addToCart}>
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
