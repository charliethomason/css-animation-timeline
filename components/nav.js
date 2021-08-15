export default function Nav({ years, getRandom }) {
  return (
    <nav>
      <h1>Amanda and Charlie Life Timeline</h1>
      <ul>
        {years.map(year => (
          <li key={`nav-${year}`}><a href={`#${year}`}>{year}</a></li>
        ))}
        <li><button type="button" className="random" onClick={getRandom}>Random</button></li>
      </ul>
    </nav>
  );
}