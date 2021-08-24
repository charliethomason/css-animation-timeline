export default function Nav({ years, onChange, getRandom }) {
  return (
    <nav>
      <h1>Amanda and Charlie Life Timeline</h1>
      <label htmlFor="year-select" className="visually-hidden">Year</label>
      <select id="year-select" onChange={evt => onChange(evt.target.value)}>
        <option value="">Scroll to a year...</option>
        {years.map(year => (
          <option key={`opt-${year}`} value={year}>{year}</option>
        ))}
      </select>
      <button type="button" className="random" onClick={getRandom}>Random event</button>
    </nav>
  );
}