import SingleItem from "./SingleItem";

export default function ItemsList(props) {
  const itemElements = props.items.map((item) => {
    return (
      <SingleItem
        key={item.id}
        item={item}
        toggleDone={props.toggleDone}
        removeItem={props.removeItem}
      />
    );
  });

  return (
    <main className="main">
      {props.items.length > 0 ? (
        <ul className="items__list">{itemElements}</ul>
      ) : (
        <h2>Your list is empty.</h2>
      )}
    </main>
  );
}
