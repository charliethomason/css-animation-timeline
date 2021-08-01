import { useState } from "react";
import events from "../data/events.json";
import Event from "./event";
import Lightbox from "./lightbox";

export default function Timeline() {
  const defaultEvent = { id: null, img: null, label: null };
  const [activeEvent, setActiveEvent] = useState(defaultEvent);
  const [lightboxShown, setLightboxShown] = useState(false);

  function handleClick(evt) {
    if (activeEvent.id !== evt.id) {
      setActiveEvent(evt);
    } else {
      setActiveEvent(defaultEvent);
    }
  }

  return (
    <>
      <ul className="timeline">
        {events.map(evt => {
          return evt.year ? (
            <li key={evt.year}>
              <h2 className="year">{evt.year}</h2>
            </li>
          ) : (
            <Event
              key={evt.id}
              label={evt.label}
              month={evt.month}
              img={evt.img}
              alignRight={evt.right}
              notable={evt.notable}
              isActive={!!activeEvent && activeEvent.id === evt.id}
              onClick={() => handleClick(evt)}
              onCircleClick={() => setLightboxShown(true)}
            />
          )
        })}
      </ul>
      <Lightbox
        img={activeEvent.img}
        label={activeEvent.label}
        isShown={lightboxShown}
        onClose={() => setLightboxShown(false)}
      />
    </>
  );
}