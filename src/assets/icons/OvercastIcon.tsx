function OvercastIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 15">
      <mask id="overcast">
        <rect width="24" height="15" fill="#fff" />
        <g fill="#000">
          <circle cx="16" cy="8" r="5.4" />
          <circle cx="11" cy="9" r="4.4" />
        </g>
      </mask>
      <g fill="#e0e0e0">
        <circle cx="7" cy="3.9" r="3" mask="url(#overcast)" id="sun" />
        <circle cx="11" cy="4.4" r="2.5" mask="url(#overcast)" id="sun" />
      </g>
      <g fill="#fefefe">
        <circle cx="16" cy="8" r="5" />
        <circle cx="11" cy="9" r="4" />
        <rect width="5" height="1" x="11" y="12" />
      </g>
    </svg>
  );
}

export default OvercastIcon;
