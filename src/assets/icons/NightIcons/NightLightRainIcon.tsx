import styles from "../RainIcons/RainIcons.module.scss";

function NightLightRainIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="90%" viewBox="0 0 24 24">
      <g fill="#fefefc">
        <circle cx="8.5" cy="12.5" r="4.5" />
        <circle cx="12" cy="11" r="6" />
        <circle cx="16.2" cy="12.2" r="4.8" />
        <rect width="8" height="2" x="8.2" y="15" />
      </g>
      <g stroke="#29b6f6" stroke-linecap="round" stroke-width="1.2">
        <path d="M10.6 18.7 L9.25 21.5" className={styles["drop2"]} />
        <path d="M 13.8 18 L12.9 20" className={styles["drop3"]} />
      </g>
      <g stroke="#f9f691" fill="#f9f691">
        <path d="M6 4 L7 5 L8 4 L7 3 Z" className={styles["big-star"]} />
        <path
          d="M9 2 L9.3 2.3 L9.6 2 L9.3 1.7 Z"
          className={styles["small-star"]}
        />
      </g>
    </svg>
  );
}

export default NightLightRainIcon;
