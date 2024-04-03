/* eslint-disable react/prop-types */
import styles from "./button.module.scss"

export default function Button({
  text,
  onClick = null,
  type = "button",
  fill = true,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={fill ? styles.fill : styles.outline}
    >
      {text}
    </button>
  );
}
