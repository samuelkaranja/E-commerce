import React from "react";
import "./NewCollections.css";
import new_collection from "../Assets/new_collections.js";
import Item from "../Item/Item";

const NewCollections = () => {
  return (
    <div className="newcollections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default NewCollections;
