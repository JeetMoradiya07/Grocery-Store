import TextField from "@mui/material/TextField";
import styles from "./Search.module.scss";

export default function Search({onChange}) {
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            onChange(event); // Trigger onChange when Enter is pressed
        }
    };

    return <TextField className={styles.TextField} label="Search Products" variant="standard" onKeyPress={handleKeyPress} onChange={onChange} />;
}
