import { useState } from "react";
import { nanoid } from "nanoid";
import { AiFillPlusSquare } from "react-icons/ai";

export default function AddItemForm(props) {
  const [text, setText] = useState("");

  function addItem(e) {
    e.preventDefault();

    if (text !== "") {
      props.setItems((prevItems) => {
        const newItem = {
          id: nanoid(),
          text,
          isDone: false,
        };

        return [newItem, ...prevItems];
      });
      setText("");
    }
  }

  return (
    <form className="add-item-form" onSubmit={addItem}>
      <input
        type="text"
        placeholder="New item..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" class="add-item__button">
        <AiFillPlusSquare size={45} />
      </button>
    </form>
  );
}
