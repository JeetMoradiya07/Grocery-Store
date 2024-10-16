import styles from "./Home.module.scss";
import introImg1 from "@/assets/Images/introImg1.png";
import introImg2 from "@/assets/Images/introImg2.png";
import introImg3 from "@/assets/Images/introImg3.png";
import GearupSection from "./Gearup/GearupSection";

export default function Home() {
    return (
        <div className={styles.Home}>
            <div className={styles.introSection}>
                <div className={styles.introImg1}>
                    <img src={introImg1} alt="" />
                </div>
                <div className={styles.introImg2}>
                    <img src={introImg2} alt="" />
                </div>
                <div className={styles.introImg3}>
                    <img src={introImg3} alt="" />
                </div>
                <div className={styles.introSell}>
                    <h3>This Week&apos;s Deals </h3>
                    <h1>10%</h1>
                    <h2>Off In All Games</h2>
                    <button>Shop Now</button>
                </div>
            </div>
            <GearupSection />
        </div>
    );
}
