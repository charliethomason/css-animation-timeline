import { useState } from "react";
import { events } from "../data/events";
import Event from "./event";

export default function Timeline() {
  const [active, setActive] = useState(null);

  function handleClick(id) {
    if (active !== id) {
      setActive(id);
    } else {
      setActive(null);
    }
  }

  return (
    <ul className="timeline">
      {events.map(evt => {
        return evt.year ? (
          <h2 key={evt.id} className="year">{evt.label}</h2>
        ) : (
          <Event
            key={evt.id}
            label={evt.label}
            img={evt.img}
            alignRight={evt.right}
            isActive={active === evt.id}
            onClick={() => handleClick(evt.id)}
          />
        )
      })}
    </ul>
  );
}