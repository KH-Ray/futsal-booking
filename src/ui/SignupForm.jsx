import { Link } from "react-router-dom";
import styles from "./Form.module.css";

function SignupForm() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <img src="/images/football-img.jpg" className={styles.image} />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.signUp}>
          <div className={styles.mainTitle}>
            <h1 className={styles.title}>Sign Up</h1>
            <p className={styles.subTitle}>
              Create your account within seconds.
            </p>
          </div>

          <div className={styles.inputs}>
            <input
              type="email"
              placeholder="Email Address"
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
            />
          </div>

          <Link to="/dashboard">
            <button type="submit" className={styles.button}>
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
