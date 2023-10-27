import Home from "./Home";
import ListBooking from "./ListBooking";
import styles from "./DashboardMain.module.css";

function DashboardMain({ handlePage, searchValue, filterValue }) {
  return (
    <main className={styles.main}>
      {handlePage === "Home" ? (
        <Home />
      ) : (
        <ListBooking searchValue={searchValue} filterValue={filterValue} />
      )}
    </main>
  );
}

export default DashboardMain;
