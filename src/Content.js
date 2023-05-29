import React from "react";
import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ color: "red", textAlign: "center" }}>Your list is empty!</p>
      )}
    </>
  );
};

export default Content;
