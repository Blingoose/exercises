import React, { useState } from "react";
import { Link } from "react-router-dom";
import storeData from "../store";
import "../styles/Products.css";

function Products() {
  const [product, setProduct] = useState(storeData);
  return (
    <div>
      Products Page
      <div className="products">
        {product.map((item) => (
          <Link key={item.id} to={`${item.id}`}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
