function PartlyCloudyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 15">
      <mask id="cloud">
        <rect width="24" height="12" fill="#fff" />
        <g fill="#000">
          <circle cx="14" cy="8" r="5.4" />
          <circle cx="9" cy="9" r="4.4" />
        </g>
      </mask>

      <circle cx="9" cy="5" r="3.8" fill="#FBC02D" mask="url(#cloud)" />
      <g fill="#fefefe">
        <circle cx="14" cy="8" r="5" />
        <circle cx="9" cy="9" r="4" />
        <rect width="5" height="1" x="9" y="12" />
      </g>
    </svg>
  );
}

export default PartlyCloudyIcon;
