export default function Event({
  label,
  month,
  img,
  alignRight,
  notable,
  color,
  isActive,
  onClick,
  onCircleClick
}) {
  const activeClass = isActive ? "active" : "";
  const btnClasses = `btn ${activeClass} ${notable ? "notable" : ""} btn--${color}`;
  return (
    <li className={`event ${alignRight ? "align-right" : ""}`}>
      <button
        type="button"
        className={btnClasses}
        onClick={onClick}
      >
        <strong>{month}:</strong> {label}
      </button>
      <div className={`circle ${isActive ? "" : "hidden"} circle--${color}`} onClick={onCircleClick}>
        <div className="circle-half left"></div>
        <div className="circle-half right"></div>
      </div>
      {!!img && <img src={`/photos/thumbs/${img}.jpg`} alt={label} className={`img ${activeClass}`} />}
    </li>
  );
}
