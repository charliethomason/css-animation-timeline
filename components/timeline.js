import { useState, useEffect } from "react";
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
  const colors = ["blue", "violet", "red", "teal"];
  let colorIndex = 0;
  let currentYear;
  let currentColor;

  function toggleLightbox(show) {
    setLightboxShown(show);
    document.body.classList.toggle("no-scroll");
  }

  useEffect(() => {
    if (!lightboxShown) {
      return;
    }
    function closeLightbox(evt) {
      if (evt.keyCode === 27){
        console.log("HI!", new Date);
        toggleLightbox(false);
      }
    }
    window.addEventListener("keyup", closeLightbox);
    return () => window.removeEventListener("keyup", closeLightbox);
  }, [lightboxShown]);

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

  function scrollToYear(year) {
    const yearAnchor = !!year
      ? document.getElementById(`year-${year}`)
      : document.querySelector(".year-anchor");
    yearAnchor.scrollIntoView();
  }

  return (
    <>
      <Nav years={years} getRandom={getRandom} onChange={scrollToYear} />
      <ul className="timeline">
        {events.map(evt => {
          const isYear = !!evt.year;
          if (isYear) {
            colorIndex = colorIndex % colors.length;
            currentColor = colors[colorIndex];
            currentYear = evt.year;
            colorIndex++;
          }
          return isYear ? (
            <li key={evt.year}>
              <div id={`year-${evt.year}`} className="year-anchor" />
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
              color={currentColor}
              isActive={!!activeEvent && activeEvent.id === evt.id}
              onClick={evtObj => handleClick(evtObj)}
              onCircleClick={() => toggleLightbox(true)}
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
        onClose={() => toggleLightbox(false)}
      />
    </>
  );
}