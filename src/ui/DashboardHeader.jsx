import styles from "./DashboardHeader.module.css";

function DashboardHeader({ handlePage }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>{handlePage}</h1>
    </header>
  );
}

export default DashboardHeader;
