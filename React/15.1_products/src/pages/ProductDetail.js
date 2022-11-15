import React from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetail({ storeData }) {
  const params = useParams();
  const items = storeData[params.productID - 1];

  const displayData = () => {
    return (
      <div>
        <h3>{items.title}</h3>
        <h4>{items.size}</h4>
        <img src={items.imageUrl} alt={items.title} />
        <p>{items.price}</p>
      </div>
    );
  };

  return (
    <div>
      {displayData()}
      <div>
        <Link to="/products">Back</Link>
      </div>
    </div>
  );
}

export default ProductDetail;
