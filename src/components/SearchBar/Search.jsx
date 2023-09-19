import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

function Search({ placeholder }) {
  return (
    <div>
      <form className={styles.wrapper}>
        <input className={styles.search} placeholder="Search for a Songs" />
        <button className={styles.searchButton} type="submit">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}

export default Search;