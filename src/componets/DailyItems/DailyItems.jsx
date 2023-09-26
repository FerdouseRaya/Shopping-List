import React from "react";
import "./DailyItems.css";
const DailyListing = ({ deletedItems}) => {
  return (
    <div className="dailyListing-wrapper">
      <div>
        <h2>Deleted Items</h2>
        <ul>
          {deletedItems.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DailyListing;
