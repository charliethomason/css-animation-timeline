import { useState } from "react";
import events from "../data/events.json";
import Event from "./event";
import Lightbox from "./lightbox";

export default function Timeline() {
  const defaultEvent = { id: null, month: null, year: null, label: null };
  const [activeEvent, setActiveEvent] = useState(defaultEvent);
  const [lightboxShown, setLightboxShown] = useState(false);

  const colors = ["blue", "violet"];
  let colorIndex = 1;
  let currentYear;

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
          const isYear = !!evt.year;
          if (isYear) {
            colorIndex = (colorIndex + 1) % colors.length;
            currentYear = evt.year;
          }
          return isYear ? (
            <li key={evt.year}>
              <h2 className="year">{evt.year}</h2>
            </li>
          ) : (
            <Event
              key={evt.id}
              label={evt.label}
              month={evt.month}
              year={currentYear}
              img={evt.id}
              alignRight={evt.right}
              notable={evt.notable}
              color={colors[colorIndex]}
              isActive={!!activeEvent && activeEvent.id === evt.id}
              onClick={evtObj => handleClick(evtObj)}
              onCircleClick={() => setLightboxShown(true)}
            />
          )
        })}
      </ul>
      <Lightbox
        img={activeEvent.id}
        month={activeEvent.month}
        year={activeEvent.year}
        label={activeEvent.label}
        isShown={lightboxShown}
        onClose={() => setLightboxShown(false)}
      />
    </>
  );
}