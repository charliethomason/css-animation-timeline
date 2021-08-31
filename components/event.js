export default function Event({
  id,
  label,
  month,
  year,
  alignRight,
  notable,
  color,
  isActive,
  onClick,
  onCircleClick
}) {
  const activeClass = isActive ? "active" : "";
  const btnClasses = `btn ${activeClass} ${notable ? "notable" : ""} btn--${color}`;
  const imgUrl = `./photos/thumbs/${id}.jpg`;
  return (
    <li className={`event ${alignRight ? "align-right" : ""}`}>
      <div id={`evt-${id}`} className="event-anchor" data-year={year}></div>
      <button
        type="button"
        className={btnClasses}
        style={{ backgroundImage: `url(${imgUrl})` }}
        onClick={() => onClick({ id, month, year, label })}
      >
        <div className="btn-text">
          <strong>{month}:</strong> {label}
        </div>
        <div className="btn-line"></div>
      </button>
      <div className={`circle ${isActive ? "" : "hidden"} circle--${color}`} onClick={onCircleClick}>
        <div className="circle-half left"></div>
        <div className="circle-half right"></div>
      </div>
      <img src={imgUrl} alt={label} className={`img ${activeClass}`} />
    </li>
  );
}
