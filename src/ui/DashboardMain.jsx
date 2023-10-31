import Home from "./Home";
import ListBooking from "./ListBooking";
import styles from "./DashboardMain.module.css";

function DashboardMain({ handlePage }) {
  return (
    <main className={styles.main}>
      {handlePage === "Home" ? <Home /> : <ListBooking />}
    </main>
  );
}

export default DashboardMain;
