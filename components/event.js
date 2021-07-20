export default function Event({ label, isActive, onClick }) {
  return (
    <li className="event">
      <button
        type="button"
        className={`btn ${isActive ? "active" : ""}`}
        onClick={onClick}
      >
        {label}
      </button>
      <div className={`circle ${isActive ? "" : "hidden"}`}>
        <div className="circle-half left"></div>
        <div className="circle-half right"></div>
      </div>
    </li>
  );
}
