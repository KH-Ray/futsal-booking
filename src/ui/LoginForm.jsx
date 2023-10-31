import styles from "./Form.module.css";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <img src="/images/football-img.jpg" className={styles.image} />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.signUp}>
          <div className={styles.mainTitle}>
            <h1 className={styles.title}>Login</h1>
            <p className={styles.subTitle}>Enter your login detail please.</p>
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
            <button className={styles.button}>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
