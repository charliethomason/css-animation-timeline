export default function Lightbox({ img, label, isShown, onClose }) {
  return (
    <div className={`lightbox ${isShown ? "" : "hidden"}`}>
      <div className="lightbox-dialog">
        <button type="button" className="lightbox-close" onClick={onClose}>Close</button>
        <div className="lightbox-content">
          {!!img && <img src={`/${img}.jpg`} alt={label} className="lightbox-img" />}
          {!!label && <p className="lightbox-label">{label}</p>}
        </div>
      </div>
    </div>
  );
}
