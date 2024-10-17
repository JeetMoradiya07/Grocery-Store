import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation"; 
import {Navigation} from "swiper/modules";
import Item from "../../Store/Item";
import styles from "./Slider.module.scss";
import {useRef, useState, useEffect} from "react";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {NavLink} from "react-router-dom";

export default function Slider() {
    const swiperRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true); 
    const [isEnd, setIsEnd] = useState(false); 
    const [products, setProducts] = useState([]); 

    // Fetch product data from API
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data); // Set the fetched data to state
            })
            .catch((error) => console.error("Error fetching products:", error));
    }, []); 

    const handleSlideChange = (swiper) => {
        setIsBeginning(swiper.isBeginning); 
        setIsEnd(swiper.isEnd); 
    };

    return (
        <>
            <div className={styles.sliderContainer}>
                {/* Previous Button */}
                <button
                    className={styles.prevButton}
                    onClick={() => swiperRef.current.swiper.slidePrev()}
                    style={{opacity: isBeginning ? 0.5 : 1}} 
                    disabled={isBeginning} 
                >
                    <FaArrowLeft size={20} />
                </button>

                {/* Swiper with API Data */}
                <Swiper
                    ref={swiperRef} 
                    spaceBetween={30} 
                    slidesPerView={4}
                    navigation={false}
                    modules={[Navigation]}
                    className={styles.swiper}
                    onSlideChange={handleSlideChange}
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
                    style={{opacity: isEnd ? 0.5 : 1}} 
                    disabled={isEnd} 
                >
                    <FaArrowRight size={20} />
                </button>
            </div>
        </>
    );
}
