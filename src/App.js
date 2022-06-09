import { useEffect, useState } from "react";

import Header from "./components/Header";
import AddItemForm from "./components/AddItemForm";
import ItemsList from "./components/ItemsList";

export default function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("listItems")) || []
  );

  useEffect(() => {
    localStorage.setItem("listItems", JSON.stringify(items));
  }, [items]);

  function toggleDone(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  }

  function removeItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Header items={items} />
      <AddItemForm setItems={setItems} />
      <ItemsList
        items={items}
        setItems={setItems}
        toggleDone={toggleDone}
        removeItem={removeItem}
      />
    </div>
  );
}
