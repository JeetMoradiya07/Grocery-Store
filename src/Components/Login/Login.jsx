import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Button from "../UI/Button";
import Input from "../UI/Input";
import styles from "./Login.module.scss";
import Error from "@/Components/UI/Error.jsx"; // Import Error component

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [messages, setMessages] = useState([]); // State for error messages
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessages([]); // Clear previous messages

        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        const user = existingUsers.find((user) => user.username === username && user.password === password);

        if (!user) {
            return setMessages([{type: "error", text: "Invalid username or password."}]);
        }

        // Clear messages before navigating to home
        setMessages([{type: "success", text: "Login successful!"}]);
        navigate("/"); // Redirect to home page
    };

    return (
        <div className={styles.login}>
            <div className={styles.Form}>
                <h1>Login</h1>
                <Error messages={messages} /> {/* Display error messages */}
                <form onSubmit={handleSubmit}>
                    <Input
                        label={"Username"}
                        type="text"
                        name="username"
                        placeholder="Username"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        label={"Password"}
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button className={styles.button} type="submit">
                        Login
                    </Button>
                </form>
                <hr className={styles.hr} />
                <Link to="/register">
                    <Button className={styles.button2}>Create Account</Button>
                </Link>
            </div>
        </div>
    );
}
