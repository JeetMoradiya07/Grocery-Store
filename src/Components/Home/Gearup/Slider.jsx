import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"; // Import Swiper core styles
import "swiper/css/navigation"; // Import navigation styles
import {Navigation} from "swiper/modules";
import Item from "../../StorePage/Item";
import styles from "./Slider.module.scss";
import {useRef, useState, useEffect} from "react";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {NavLink} from "react-router-dom";

export default function Slider() {
    const swiperRef = useRef(null); // Create a ref for the Swiper
    const [isBeginning, setIsBeginning] = useState(true); // Initialize to true
    const [isEnd, setIsEnd] = useState(false); // State to track if it's the last slide
    const [products, setProducts] = useState([]); // State to hold API data

    // Fetch product data from API
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data); // Set the fetched data to state
            })
            .catch((error) => console.error("Error fetching products:", error));
    }, []); // Run this effect once after the component mounts

    const handleSlideChange = (swiper) => {
        setIsBeginning(swiper.isBeginning); // Update isBeginning state
        setIsEnd(swiper.isEnd); // Update isEnd state
    };

    return (
        <>
            <div className={styles.sliderContainer}>
                {/* Previous Button */}
                <button
                    className={styles.prevButton}
                    onClick={() => swiperRef.current.swiper.slidePrev()}
                    style={{opacity: isBeginning ? 0.5 : 1}} // Use isBeginning from state
                    disabled={isBeginning} // Disable button if at the beginning
                >
                    <FaArrowLeft size={20} />
                </button>

                {/* Swiper with API Data */}
                <Swiper
                    ref={swiperRef} // Attach the ref to the Swiper
                    spaceBetween={30} // Set space between slides
                    slidesPerView={4}
                    navigation={false} // Disable default navigation
                    modules={[Navigation]}
                    className={styles.swiper}
                    onSlideChange={handleSlideChange} // Add slide change event handler
                >
                    {/* Dynamically render SwiperSlide based on API data */}
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <NavLink to={`/product/${product.id}`}>
                                <Item name={product.title} price={product.price} image={product.image} />
                            </NavLink>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Next Button */}
                <button
                    className={styles.nextButton}
                    onClick={() => swiperRef.current.swiper.slideNext()}
                    style={{opacity: isEnd ? 0.5 : 1}} // Set opacity based on isEnd state
                    disabled={isEnd} // Disable button if at the end
                >
                    <FaArrowRight size={20} />
                </button>
            </div>
        </>
    );
}
