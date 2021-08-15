import { useState } from "react";
import events from "../data/events.json";
import Nav from "./nav";
import Event from "./event";
import Lightbox from "./lightbox";

export default function Timeline() {
  const defaultEvent = { id: null, month: null, year: null, label: null };
  const [activeEvent, setActiveEvent] = useState(defaultEvent);
  const [lightboxShown, setLightboxShown] = useState(false);
  const onlyEvents = events.filter(evt => !evt.year);
  const years = events.filter(evt => !!evt.year).map(evt => evt.year);

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

  function getRandom() {
    const numberOfEvents = onlyEvents.length;
    const randomIndex = Math.floor(Math.random() * numberOfEvents);
    const { label, month, id } = onlyEvents[randomIndex];
    const evtAnchor = document.getElementById(`evt-${id}`);
    evtAnchor.scrollIntoView();
    handleClick({ label, month, id, year: evtAnchor.dataset.year });
  }

  return (
    <>
      <Nav years={years} getRandom={getRandom} />
      <ul className="timeline">
        {events.map(evt => {
          const isYear = !!evt.year;
          if (isYear) {
            colorIndex = (colorIndex + 1) % colors.length;
            currentYear = evt.year;
          }
          return isYear ? (
            <li key={evt.year}>
              <div id={evt.year} className="year-anchor" />
              <h2 className="year">{evt.year}</h2>
            </li>
          ) : (
            <Event
              key={evt.id}
              id={evt.id}
              label={evt.label}
              month={evt.month}
              year={currentYear}
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