import {useEffect} from 'react';
import React from "react";
import "./Listing.css";
import { v4 as uuidV4 } from 'uuid';

const Form = ({ input, setInput, items, setItems ,editItems,  setEditItems}) => {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  //updatedItems
  const updateItems = (title, id, completed) => {
    const newItem = items.map((item) =>
      item.id === id ? { ...item, title, completed } : item
    );
    setItems(newItem);
    setEditItems('');
  };
  //useEffect using while editing 
  useEffect(()=>{
    if(editItems){
      setInput(editItems.title);
    }
    else{
      setInput("");
    }
  },[setInput,editItems])
  
  const onFormSubmit = (event) => {
    event.preventDefault();
    if(!editItems){
      setItems([...items,{id:uuidV4(),title:input, completed:false}])
    setInput("");
    }
    else{
      updateItems(input,editItems.id,editItems.completed)
    }
    
  };
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Enter an item.."
          className="task-input"
          value={input}
          required
          onChange={onInputChange}
        />
        <button className="add-btn" type="submit">
        {editItems?"Ok":"ADD"}
        </button>
      </form>
    </div>
  );
};

export default Form;
