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
      {events.map(({ label, id }) => (
        <Event
          key={id}
          label={label}
          isActive={active === id}
          onClick={() => handleClick(id)}
        />
      ))}
    </ul>
  );
}