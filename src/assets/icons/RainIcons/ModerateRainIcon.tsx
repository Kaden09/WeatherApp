import styles from "./RainIcons.module.scss";

function ModerateRainIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="90%" viewBox="0 0 24 18">
      <g fill="#fefefc">
        <circle cx="8.5" cy="7.5" r="4.5" />
        <circle cx="12" cy="6" r="6" />
        <circle cx="16.2" cy="7.2" r="4.8" />
        <rect width="8" height="2" x="8.2" y="10" />
      </g>
      <g stroke="#29b6f6" stroke-linecap="round" stroke-width="1.2">
        <path d="M9.5 13 L8.5 15" className={styles["drop1"]} />
        <path d="M12.1 13.7 L10.5 17" className={styles["drop2"]} />
        <path d="M15.3 13 L14.4 15" className={styles["drop3"]} />
      </g>
    </svg>
  );
}

export default ModerateRainIcon;
