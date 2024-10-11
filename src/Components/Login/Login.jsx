import {Link} from "react-router-dom";
import Button from "../UI/Button";
import Input from "../UI/Input";
import styles from "./Login.module.scss";

export default function Login() {
    return (
        <div className={styles.login}>
            <div className={styles.Form}>
                <h1>Login</h1>
                <Input label={"Username"} type="text" name="username" placeholder="Username" required />
                <Input label={"Password"} type="password" name="password" placeholder="Password" required />
                <Button className={styles.button} type="submit">
                    Login
                </Button>
                <hr className={styles.hr} />
                <Link>
                    <Button className={styles.button2}>Login with Google</Button>
                </Link>
                <Link to="/register">
                    <Button className={styles.button2}>Create Account</Button>
                </Link>
            </div>
        </div>
    );
}
