export default function Lightbox({ img, month, year, label, isShown, onClose }) {
  return (
    <div className={`lightbox ${isShown ? "" : "hidden"}`}>
      <div className="lightbox-dialog">
        <button type="button" className="lightbox-close" onClick={onClose}>Close</button>
        <div className="lightbox-content">
          {!!img && <img src={`/photos/full/${img}.jpg`} alt={label} className="lightbox-img" />}
          {!!label && <p className="lightbox-label"><strong>{month} {year}:</strong> {label}</p>}
        </div>
      </div>
    </div>
  );
}
