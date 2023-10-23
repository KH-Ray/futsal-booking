import LoginForm from "../ui/LoginForm";
import SignupForm from "../ui/SignupForm";

import styles from "./Login.module.css";

function Login() {
  return (
    <main className={styles.login}>
      {/* <LoginForm /> */}
      <SignupForm />
    </main>
  );
}

export default Login;
