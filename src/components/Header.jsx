export default function Header(props) {
  return (
    <header className="header">
      <h1>My List</h1>
      <h3>{props.items.length} items</h3>
    </header>
  );
}
