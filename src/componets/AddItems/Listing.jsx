import { useState } from "react";
import React from "react";
import "./Listing.css";
import Form from "./form";
import Item from "./Item";

const Listing = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [editItems, setEditItems] = useState(null);
  // const [deletedItems,setDeletedItems] =useState([]);

  return (
    <div className="shopping-wrapper">
      <div className="header">
        <h1>Add Items</h1>
      </div>
      <div>
        <Form
          input={input}
          setInput={setInput}
          items={items}
          setItems={setItems}
          editItems={editItems}
          setEditItems={setEditItems}
          // deletedItems={deletedItems}
          // setDeletedItems={setDeletedItems}
        />
      </div>
      <div>
        <Item
          items={items}
          setItems={setItems}
          setEditItems={setEditItems}
          // setDeletedItems={setDeletedItems}
        />
      </div>
      {/* <div>
        <DailyItems deletedItems={deletedItems} />
      </div> */}
    </div>
  );
};

export default Listing;
