    import {useEffect, useState} from "react";
    import PropTypes from "prop-types";
    import styles from "./Error.module.scss";

    export default function Error({messages = []}) {
        const [visibleMessages, setVisibleMessages] = useState(messages);

        useEffect(() => {
            const timer = setTimeout(() => {
                setVisibleMessages([]); // Clear messages after 3 seconds
            }, 3000);

            return () => clearTimeout(timer); // Cleanup timer
        }, [messages]);

        return (
            <div className={styles.error}>
                {visibleMessages.map((msg, index) => (
                    <div key={index} className={styles[msg.type]}>
                        {msg.text}
                    </div>
                ))}
            </div>
        );
    }

    // PropTypes for validation
    Error.propTypes = {
        messages: PropTypes.arrayOf(
            PropTypes.shape({
                type: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired,
            })
        ),
    };
