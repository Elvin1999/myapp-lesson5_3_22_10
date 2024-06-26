import React from "react";

export default function Item(props) {
  return (
    <li key={props.item.id}>
      <span>
        <b>{props.item.id}</b>
      </span>
      : {props.item.name}
      <button
        onClick={() => {
          props.deleteItem(props.item.id);
        }}
      >
        Remove Artist
      </button>
    </li>
  );
}
