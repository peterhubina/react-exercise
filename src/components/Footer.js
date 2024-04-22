import React from "react";

const Footer = () => {
  /* Query parameters */
  const params = new URLSearchParams(window.location.search);

  const appHost = params.get("apphost");
  const osPlatform = params.get("os");
  const appVersion = params.get("appversion");

  return (
    /* Footer with query details at the bottom of the screen */
    <footer>
      {`Application Name: ${appHost}, OS Platform: ${osPlatform}, Version: ${appVersion}`}
    </footer>
  );
};

export default Footer;
