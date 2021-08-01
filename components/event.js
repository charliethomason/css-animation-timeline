export default function Event({
  label,
  month,
  img,
  alignRight,
  notable,
  isActive,
  onClick,
  onCircleClick
}) {
  const activeClass = isActive ? "active" : "";
  const btnClasses = `btn ${activeClass} ${notable ? "notable" : ""}`;
  return (
    <li className={`event ${alignRight ? "align-right" : ""}`}>
      <button
        type="button"
        className={btnClasses}
        onClick={onClick}
      >
        <div className="btn-text">
          <strong>{month}:</strong> {label}
        </div>
      </button>
      <div className={`circle ${isActive ? "" : "hidden"}`} onClick={onCircleClick}>
        <div className="circle-half left"></div>
        <div className="circle-half right"></div>
      </div>
      {!!img && <img src={`/${img}.jpg`} alt={label} className={`img ${activeClass}`} />}
    </li>
  );
}
