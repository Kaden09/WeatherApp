function LightningIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18" width="100%">
      <mask id="lightning-mask">
        <rect width="100%" height="100%" fill="#fff" />
        <path
          d="M12.5 10.5 L10.5 14 M10.5 14 L13.5 13.5 M13.5 13.5 L11.5 17 M11.5 17 L12.5 10.5"
          stroke="#000"
          stroke-width="3"
          stroke-linecap="round"
          id="lightning"
        />
      </mask>
      <g mask="url(#lightning-mask)" fill="#fefefc">
        <circle cx="8.5" cy="7.5" r="4.5" />
        <circle cx="12" cy="6" r="6" />
        <circle cx="16.2" cy="7.2" r="4.8" />
        <rect width="7.5" height="2" x="8.2" y="10" />
      </g>
      <path
        d="M12.5 10.5 L10.5 14 M10.5 14 L13.5 13.5 M13.5 13.5 L11.5 17 M11.5 17 L12.5 10.5"
        fill="#FBC02D"
        stroke="#FBC02D"
        stroke-width="1.1"
        stroke-linecap="round"
        id="lightning"
      />
    </svg>
  );
}

export default LightningIcon;
