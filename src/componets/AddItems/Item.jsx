import React from "react";

const Item = ({ items, setItems, setEditItems }) => {
  const handleComplete = (item) => {
    setItems(
      items.map((newItem) => {
        if (newItem.id === item.id) {
          return { ...newItem, completed: !newItem.completed };
        }
        return newItem;
      })
    );
  };
  const handleEdit = ({ id }) => {
    const findItem = items.find((item) => item.id === id);
    setEditItems(findItem);
  };
  //   const handleDelete = ({ id }) => {
  //     const deletedItem = items.filter((item) => item.id !== id);
  //     setItems(deletedItem);
  //   };
  const handleDelete = ({ id, title, event }) => {
    const confirmDelete = window.confirm(
      `Do you want to delete "${title}"?`
    );
    if (confirmDelete) {
      const deletedItem = items.filter((item) => item.id !== id);
      setItems(deletedItem);
    } else {
      event.stopPropagation();
    }
  };

  return (
    <div>
      {items.map((item) => (
        <li className="item-list" key={item.id}>
          <input
            type="text"
            className={`list ${item.completed ? "complete" : ""}`}
            value={item.title}
            onChange={(event) => event.preventDefault()}
          />

          <div>
            <button
              className="button-complete task-btn"
              onClick={() => handleComplete(item)}
            >
              <i className="fa-solid fa-circle-check"></i>
            </button>
            <button
              className="button-edit task-btn"
              onClick={() => handleEdit(item)}
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button
              className="button-delete task-btn"
              onClick={(event) => handleDelete(item, event)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Item;
