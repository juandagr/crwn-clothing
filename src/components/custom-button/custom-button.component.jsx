import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSingIn, ...otherProps }) => (
  <div
    className={`${isGoogleSingIn ? "google-sing-in" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </div>
);

export default CustomButton;
