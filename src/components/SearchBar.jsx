import styles from "./SearchBar.module.css";

function SearchBar({ handleSearchValue, handleFilterValue }) {
  return (
    <div className={styles.searchOptions}>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => handleSearchValue(e.target.value)}
        className={styles.searchBar}
      />

      <select
        name="lokasi"
        id="filter-lokasi"
        onChange={(e) => handleFilterValue(e.target.value)}
        className={styles.dropdown}
      >
        <option value="">None</option>
        <option value="jakarta">Jakarta</option>
        <option value="tangerang">Tangerang</option>
        <option value="bandung">Bandung</option>
      </select>
    </div>
  );
}

export default SearchBar;
