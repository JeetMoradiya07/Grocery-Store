import {Link} from "react-router-dom";
import Button from "../UI/Button";
import Input from "../UI/Input";
import styles from "./Login.module.scss";

export default function Register() {
    return (
        <div className={styles.login}>
            <div className={styles.Form}>
                <h1>Register</h1>
                <Input label={"Username"} type="text" name="username" placeholder="Username" required />
                <Input label={"Mobile Number"} type="tel" maxLength={10} name="mobile Number" placeholder="Enter Your Mobile Number" required />
                <Input label={"Password"} type="password" name="password" placeholder="Password" required />
                <Input label={"Confirm Password"} type="password" name="password" placeholder="Confirm Password" required />
                <Button className={styles.button} type="submit">
                Register
                </Button>
                <hr className={styles.hr} />
                <Link>
                    <Button className={styles.button2}>Login with Google</Button>
                </Link>
            </div>
        </div>
    );
}
