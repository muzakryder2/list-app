import { FaRegCheckSquare, FaRegSquare, FaBan } from "react-icons/fa";

export default function SingleItem(props) {
  return (
    <li className="item">
      <div className="checkbox" onClick={() => props.toggleDone(props.item.id)}>
        {props.item.isDone ? (
          <FaRegCheckSquare size={20} />
        ) : (
          <FaRegSquare size={20} />
        )}
      </div>
      <p className={`item__text ${props.item.isDone && "item--done"}`}>
        {props.item.text}
      </p>
      <FaBan
        size={20}
        className="item__delete"
        onClick={() => props.removeItem(props.item.id)}
      />
    </li>
  );
}
