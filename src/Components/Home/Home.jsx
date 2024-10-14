import {useEffect, useState} from "react";
import styles from "./Home.module.scss";
import Wizard from "@/assets/Images/Wizard.png";
import Danger from "@/assets/Images/Danger.png";
import Power from "@/assets/Images/Power.png";

export default function Home() {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={styles.Home}>
            <div className={styles.intro_section} style={{backgroundPositionY: `${scrollY * -0.2}px`}}>
                <div className={styles.overlay}>
                    <div className={styles.imageContainer}>
                        <img src={Wizard} alt="Wizard" />
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={Danger} alt="Danger" />
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={Power} alt="Power" />
                    </div>
                </div>
            </div>
        </div>
    );
}
