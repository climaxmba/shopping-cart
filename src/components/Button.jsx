/* eslint-disable react/prop-types */

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
      className={`${fill ? "btn-fill" : "btn-outline"}`}
    >
      {text}
    </button>
  );
}
