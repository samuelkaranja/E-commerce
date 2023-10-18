import React from "react";
import "./RelatedProducts.css";
import data_product from "../Assets/data";
import Item from "../Item/Item.jsx";

const RelatedProducts = () => {
  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
