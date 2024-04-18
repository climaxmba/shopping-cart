/* eslint-disable react/prop-types */
import styles from "./button.module.scss"

export default function Button({
  text,
  onClick = undefined,
  type = "button",
  fill = false,
  style = undefined
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={fill ? styles.fill : styles.outline}
      style={style}
    >
      {text}
    </button>
  );
}
