import {useEffect, useState, useRef} from "react";
import {motion} from "framer-motion";
import styles from "./Parallax.module.scss";
import img from "@/assets/Images/parallax.png";

export default function Parallax({jsx, id}) {
    const [scrollY, setScrollY] = useState(0);
    const parallaxRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!parallaxRef.current) return;

            const rect = parallaxRef.current.getBoundingClientRect();
            const scrollPos = Math.min(Math.max(rect.top - window.innerHeight / 10, 0), window.innerHeight);
            const scrollPercent = scrollPos / window.innerHeight;

            setScrollY(scrollPercent);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scaleValue = 1 + 0.5 * (1 - scrollY);
    const opacityValue = scrollY + 0.3;

    return (
        <div ref={parallaxRef} id={id} className={styles.Parallax}>
            <div className={styles.parallax}>
                <motion.div
                    className={styles.imageContainer}
                    style={{
                        scale: scaleValue,
                        opacity: opacityValue,
                    }}
                >
                    <img src={img} alt="Parallax" className={styles.parallaxImage} />
                </motion.div>
                <div className={styles.content}>{jsx}</div>
            </div>
        </div>
    );
}
