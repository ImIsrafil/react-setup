import React from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

const UserInput = ({
  newItem,
  setNewItem,
  handleSubmit,
  search,
  setSearch,
}) => {
  return (
    <div className="userInput">
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
    </div>
  );
};

export default UserInput;
