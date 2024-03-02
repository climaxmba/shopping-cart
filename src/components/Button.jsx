/* eslint-disable react/prop-types */

export default function Button({ text, fill = true }) {
  return (
    <button className={`${fill ? "btn-fill" : "btn-outline"}`}>{text}</button>
  );
}
