export default function Event({ label, month, img, alignRight, isActive, onClick, onCircleClick }) {
  const activeClass = isActive ? "active" : "";
  return (
    <li className={`event ${alignRight ? "align-right" : ""}`}>
      <button
        type="button"
        className={`btn ${activeClass}`}
        onClick={onClick}
      >
        <strong>{month}:</strong> {label}
      </button>
      <div className={`circle ${isActive ? "" : "hidden"}`} onClick={onCircleClick}>
        <div className="circle-half left"></div>
        <div className="circle-half right"></div>
      </div>
      {!!img && <img src={`/${img}.jpg`} alt={label} className={`img ${activeClass}`} />}
    </li>
  );
}
