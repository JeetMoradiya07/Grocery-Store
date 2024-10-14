import {useEffect, useState} from "react";
import styles from "./Home.module.scss";

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
            <div className={styles.intro_section} style={{backgroundPositionY: `${scrollY * -0.20}px`}}></div>
        </div>
    );
}
