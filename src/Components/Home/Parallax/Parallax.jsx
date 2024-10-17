import {useEffect, useState, useRef} from "react";
import styles from "./Parallax.module.scss";
import img from "../../../assets/Images/parallax.png";

export default function Parallax({jsx}) {
    const [scrollY, setScrollY] = useState(0);
    const [inView, setInView] = useState(false); 
    const parallaxRef = useRef(null); 

    // Handle scroll event
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting); 
            },
            {threshold: 0.1} 
        );

        if (parallaxRef.current) {
            observer.observe(parallaxRef.current);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect(); 
        };
    }, []);

    // Calculate styles for images based on scroll position and inView state
    const imgStyles = {
        transform: inView
            ? `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.002})`
            : "translateY(0) scale(1)", 
        opacity: inView
            ? `${Math.max(1 - scrollY * 0.005, 0)}` 
            : 1, 
        transition: "transform 0.2s ease-out, opacity 0.2s ease-out", 
    };

    return (
        <div ref={parallaxRef} className={styles.Parallax}>
            <div className={styles.parallax}>
                <div className={styles.imageContainer}>
                    <img src={img} alt="Parallax" className={styles.parallaxImage} style={imgStyles} />
                </div>
                <div className={styles.content}>{jsx}</div>
            </div>
        </div>
    );
}
