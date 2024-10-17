import {useEffect, useState, useRef} from "react";
import styles from "./Parallax.module.scss";
import img from "../../../assets/Images/parallax.png";

export default function Parallax({jsx}) {
    const [scrollY, setScrollY] = useState(0);
    const [inView, setInView] = useState(false); // Track if the section is in view
    const parallaxRef = useRef(null); // Ref for the parallax section

    // Handle scroll event
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting); // Set inView based on intersection
            },
            {threshold: 0.1} // Trigger when 10% of the section is visible
        );

        if (parallaxRef.current) {
            observer.observe(parallaxRef.current); // Observe the parallax section
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect(); // Clean up the observer
        };
    }, []);

    // Calculate styles for images based on scroll position and inView state
    const imgStyles = {
        transform: inView
            ? `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.002})` // Adjust scale factor for smoother zoom
            : "translateY(0) scale(1)", // Reset when out of view
        opacity: inView
            ? `${Math.max(1 - scrollY * 0.005, 0)}` // Fade out more gradually
            : 1, // Keep opacity full when out of view
        transition: "transform 0.2s ease-out, opacity 0.2s ease-out", // Smooth transition effects
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
