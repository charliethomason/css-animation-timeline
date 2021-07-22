export default function Event({ label, img, alignRight, isActive, onClick }) {
  const activeClass = isActive ? "active" : "";
  return (
    <li className={`event ${alignRight ? "align-right" : ""}`}>
      <button
        type="button"
        className={`btn ${activeClass}`}
        onClick={onClick}
      >
        {label}
      </button>
      <div className={`circle ${isActive ? "" : "hidden"}`}>
        <div className="circle-half left"></div>
        <div className="circle-half right"></div>
      </div>
      {!!img && <img src={`/${img}.jpg`} alt={label} className={`img ${activeClass}`} />}
    </li>
  );
}
