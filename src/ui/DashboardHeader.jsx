import SearchBar from "../components/SearchBar";
import styles from "./DashboardHeader.module.css";

function DashboardHeader({ handlePage, handleSearchValue, handleFilterValue }) {
  return (
    <header className={styles.header}>
      {handlePage === "Home" ? (
        <h1 className={styles.headerTitle}>{handlePage}</h1>
      ) : (
        <SearchBar
          handleSearchValue={handleSearchValue}
          handleFilterValue={handleFilterValue}
        />
      )}
    </header>
  );
}

export default DashboardHeader;
