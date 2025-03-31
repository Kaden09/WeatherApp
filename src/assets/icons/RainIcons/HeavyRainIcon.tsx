import styles from "./HeavyRainIcon.module.scss";

function HeavyRainIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="90%" viewBox="0 0 24 18">
      <g fill="#fefefc">
        <circle cx="8.5" cy="7.5" r="4.5" />
        <circle cx="12" cy="6" r="6" />
        <circle cx="16.2" cy="7.2" r="4.8" />
        <rect width="8" height="2" x="8.2" y="10" />
      </g>
      <g stroke="#29b6f6" stroke-linecap="round" stroke-width="1.2">
        <path d="M8 13 L7 15" className={styles["drop1"]} />
        <path d="M10.6 13.7 L9 17" className={styles["drop2"]} />
        <path d="M 13.8 13 L12.9 15" className={styles["drop3"]} />
        <path d="M16.2 14.2 L15 16.8" className={styles["drop4"]} />
      </g>
    </svg>
  );
}

export default HeavyRainIcon;
