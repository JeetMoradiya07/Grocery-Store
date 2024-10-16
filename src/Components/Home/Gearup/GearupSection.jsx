import styles from "./GearupSection.module.scss";
import Slider from "./Slider";

export default function GearupSection() {
    return (
        <div className={styles.GearupSection}>
            <div className={styles.heading}>
                <h1>Best Sellers</h1>
                <button>View All</button>
            </div>
            <Slider />
        </div>
    );
}
