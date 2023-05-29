import { useState, useEffect } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import UserInput from "./UserInput";

function App() {
  const API_URL = "http://localhost:3500/items";
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // console.log("before useEffect");
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not get expected data!");
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      (async () => fetchItems())();
    }, 2000);
  }, []);
  // console.log("after useEffect");

  const handleCheck = (id) => {
    const listItems = items.map((item) => {
      if (item.id === id) return { ...item, checked: !item.checked };
      else return item;
    });
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const addNewItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const itemToBeAdded = { id, checked: false, item };
    const listItems = [...items, itemToBeAdded];

    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;

    addNewItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Grocery List" />
      <UserInput
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        search={search}
        setSearch={setSearch}
      />
      <main>
        {fetchError && <p style={{ color: "red" }}>Error: {fetchError}</p>}
        {isLoading && <p>Loading items...</p>}
        {!fetchError && !isLoading && (
          <Content
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
