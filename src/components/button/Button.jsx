/* eslint-disable react/prop-types */
import styles from "./button.module.scss"

export default function Button({
  text,
  onClick = undefined,
  type = "button",
  fill = false,
  style = undefined,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${fill ? styles.fill : styles.outline} ${className}`}
      style={style}
    >
      {text}
    </button>
  );
}
