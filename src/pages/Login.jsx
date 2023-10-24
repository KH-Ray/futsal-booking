import "./Login.module.css";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <main className={styles.login}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <img
            src="./public/images/football-img.jpg"
            className={styles.image}
          />
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.signUp}>
            <div className={styles.mainTitle}>
              <h1 className={styles.title}>Login</h1>
              <p className={styles.subTitle}>Enter your login detail please.</p>
            </div>

            <div className={styles.inputs}>
              <input
                type="text"
                placeholder="Email Address"
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Password"
                className={styles.input}
              />
            </div> 
            <div>
            <Link to="/LandingPage">
             <button className={styles.button}>Log In</button>
             </Link>
            </div>    
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
