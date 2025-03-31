import styles from "./NightIcons.module.scss";

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="75%" viewBox="0 0 24 24">
      <mask id="moon-mask">
        <rect width="100%" height="100%" fill="#fff" />
        <circle cx="17" cy="8" r="7" fill="#000" />
      </mask>
      <circle
        mask="url(#moon-mask)"
        cx="12"
        cy="12"
        r="10"
        fill="#f9f3ca"
        className={styles.moon}
      />
    </svg>
  );
}

export default MoonIcon;
