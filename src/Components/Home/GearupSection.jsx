import GearItem from "./GearItem";
import styles from "./GearupSection.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={styles.sliderContainer}>
            <Slider {...settings}>
                <GearItem />
                <GearItem />
                <GearItem />
                <GearItem />
                <GearItem />
                <GearItem />
            </Slider>
        </div>
    );
}
