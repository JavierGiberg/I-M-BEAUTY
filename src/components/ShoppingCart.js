import React, { useEffect } from "react";
import "./ShoppingCart.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function ShoppingCart(props) {
  useEffect(() => {});

  return (
    <div className="ShoppingCart">
      <h1>סל קניות</h1>
      <div>
        {props.items.map((item, index) => (
          <div className="ShoppingCart_product" key={index}>
            <img src={item.image} width="100px" />
            <p>{item.details}</p>
            <button onClick={() => props.removeItem(item)}>הסרה</button>
          </div>
        ))}
      </div>
      <p>סה"כ {props.total} ש"ח</p>
      <button onClick={props.checkout}>שלם ושלח</button>
    </div>
  );
}

export default ShoppingCart;
