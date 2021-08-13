export default function Nav({ years }) {
  return (
    <nav>
      <h1>Amanda and Charlie Life Timeline</h1>
      <ul>
        {years.map(year => (
          <li key={`nav-${year}`}><a href={`#${year}`}>{year}</a></li>
        ))}
      </ul>
    </nav>
  );
}