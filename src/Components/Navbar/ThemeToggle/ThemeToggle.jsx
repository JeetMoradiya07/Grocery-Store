import {useEffect, useState} from "react";
import styles from "./ThemeToggle.module.scss";

const storageKey = "theme-preference";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(getColorPreference());

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem(storageKey, newTheme);
        reflectPreference(newTheme);
    };

    const reflectPreference = (theme) => {
        document.documentElement.setAttribute("data-theme", theme);
        document.querySelector("#theme-toggle")?.setAttribute("aria-label", theme);
    };

    useEffect(() => {
        reflectPreference(theme);

        const systemThemeListener = window.matchMedia("(prefers-color-scheme: dark)");
        systemThemeListener.addEventListener("change", ({matches: isDark}) => {
            const systemTheme = isDark ? "dark" : "light";
            setTheme(systemTheme);
            localStorage.setItem(storageKey, systemTheme);
            reflectPreference(systemTheme);
        });

        return () => {
            systemThemeListener.removeEventListener("change", toggleTheme);
        };
    }, [theme]);

    return (
        <button
            className={styles.themeToggle}
            id="theme-toggle"
            title="Toggles light & dark"
            aria-label={theme}
            aria-live="polite"
            onClick={toggleTheme}
        >
            <svg className={styles.sunAndMoon} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
                <mask className={styles.moon} id="moon-mask">
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                    <circle cx="24" cy="10" r="6" fill="black" />
                </mask>
                <circle className={styles.sun} cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
                <g className={styles.sunBeams} stroke="currentColor">
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </g>
            </svg>
        </button>
    );
};

const getColorPreference = () => {
    if (localStorage.getItem(storageKey)) {
        return localStorage.getItem(storageKey);
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export default ThemeToggle;
