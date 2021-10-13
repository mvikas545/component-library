import React, { useState } from "react";
import styles from "./styles.module.css";
import buttonTheme from "../../styles/buttonTheme";
import PropTypes from "prop-types";

function Button({
  value,
  type = "primary",
  height = "40",
  fontWeight = "600",
  style = {},
  onClick,
  borderRadius,
  outlineButton = false,
}) {
  const btnColor = buttonTheme.colorMapping[type].bgColor;
  const hoverColor = buttonTheme.colorMapping[type].bgHover;
  const color = buttonTheme.colorMapping[type].color;
  const [buttonColor, setButtonColor] = useState(
    !outlineButton ? btnColor : "#ffff"
  );
  const [borderColor, setBorderColor] = useState(btnColor);

  return (
    <div className={styles.btn}>
      <button
        onMouseEnter={() => {
          if (outlineButton) {
            setButtonColor(hoverColor);
            setBorderColor("#ffff");
          } else {
            setButtonColor(hoverColor);
          }
        }}
        onMouseLeave={() => {
          if (outlineButton) {
            setButtonColor("#ffff");
            setBorderColor(btnColor);
          } else {
            setButtonColor(btnColor);
          }
        }}
        onClick={onClick}
        style={{
          backgroundColor: buttonColor,
          borderWidth: outlineButton ? 2 : 0,
          borderColor: borderColor,
          color: outlineButton ? borderColor : color,
          height: +height,
          fontWeight: fontWeight,
          borderRadius,
          ...style,
        }}
      >
        {value}
      </button>
    </div>
  );
}
Button.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  height: PropTypes.number,
  fontWeight: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  borderRadius: PropTypes.number,
  outlineButton: PropTypes.bool,
};

Button.defaultTypes = {
  value: "Click me",
  type: "primary",
  height: 40,
  fontWeight: "500",
  style: {},
  borderRadius: 6,
  outlineButton: false,
};
export default Button;
