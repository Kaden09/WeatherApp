import styles from "./NightIcon.module.scss";

function NightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100px" viewBox="0 0 24 18">
      <mask id="moon-mask">
        <rect width="100%" height="100%" fill="#fff" />
        <circle cx="20" cy="2" r="3" fill="#000" />
        <g>
          <circle cx="8.5" cy="13.5" r="5.5" />
          <circle cx="12" cy="12" r="7" />
          <circle cx="16.2" cy="13.2" r="5.8" />
          <rect width="7.9" height="2" x="8.2" y="16" />
        </g>
      </mask>
      <circle
        mask="url(#moon-mask)"
        cx="16.5"
        cy="6"
        r="4.5"
        fill="#f9f3ca"
        className={styles.moon}
      />
      <g fill="#fefefc">
        <circle cx="8.5" cy="13.5" r="4.5" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="16.2" cy="13.2" r="4.8" />
        <rect width="7.9" height="2" x="8.2" y="16" />
      </g>
      <g stroke="#f9f691" fill="#f9f691">
        <path d="M6 5 L7 6 L8 5 L7 4 Z" className={styles["big-star"]} />
        <path
          d="M9 3 L9.3 3.3 L9.6 3 L9.3 2.7 Z"
          className={styles["small-star"]}
        />
      </g>
    </svg>
  );
}

export default NightIcon;
