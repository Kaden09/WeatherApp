import styles from "./Searchbar.module.scss";

function Searchbar() {
  return (
    <input
      className={styles.searchbar}
      placeholder="Enter your city..."
      type="text"
    />
  );
}

export default Searchbar;
