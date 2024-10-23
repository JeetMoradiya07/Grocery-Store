import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Button from "../UI/Button";
import Input from "../UI/Input";
import styles from "./Login.module.scss";
import Error from "@/Components/UI/Error.jsx"; // Import Error component

export default function Register() {
    const [username, setUsername] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [messages, setMessages] = useState([]); // State for error messages
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessages([]); // Clear previous messages

        if (password !== confirmPassword) {
            return setMessages([{type: "error", text: "Passwords do not match."}]);
        }

        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = existingUsers.some((user) => user.username === username);

        if (userExists) {
            return setMessages([{type: "error", text: "Username already exists."}]);
        }

        const newUser = {username, mobileNumber, password};
        existingUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(existingUsers));
        setMessages([{type: "success", text: "Registration successful!"}]);
        navigate("/login");
    };

    return (
        <div className={styles.login}>
            <div className={styles.Form}>
                <h1>Register</h1>
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
                        label={"Mobile Number"}
                        type="tel"
                        maxLength={10}
                        name="mobileNumber"
                        placeholder="Enter Your Mobile Number"
                        required
                        onChange={(e) => setMobileNumber(e.target.value)}
                    />
                    <Input
                        label={"Password"}
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Input
                        label={"Confirm Password"}
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Button className={styles.button} type="submit">
                        Register
                    </Button>
                </form>
                <hr className={styles.hr} />
                <Link>
                    <Button className={styles.button2}>Login with Google</Button>
                </Link>
            </div>
        </div>
    );
}
