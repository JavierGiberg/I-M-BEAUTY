import { useState } from "react";
import "./AddProductForm.css";
import FirebaseFirestoreService from "../FirebaseFirestoreService";
function AddProductForm(props) {
  function handleRecipeformsubmit(e) {
    handleAddProduct(e);
  }

  async function handleAddProduct(newProduct) {
    try {
      const response = await FirebaseFirestoreService.createDocument(
        "product",
        newProduct
      );
    } catch (error) {
      alert(error);
    }
  }
  function Filter(props) {
    return props.filter.map((colle, index) => (
      <option key={index} value={colle.collection}>
        {colle.collection}
      </option>
    ));
  }

  return (
    <div className="AddProductForm_container">
      <div className="AddProductForm_lis_container">
        <h1>אוסף מוצר לחנות</h1>
        <div className="AddProductForm_list">
          <ul>
            <li>
              <select id="category">
                <Filter filter={props.sortlist} />
              </select>
            </li>
            <br />
            <li>
              <input id="mcode" placeholder="הכנס מק'ט מוצר"></input>
            </li>
            <br />
            <li>
              <input id="details" placeholder="הכנס פרטי מוצר"></input>
            </li>
            <br />
            <li>
              <input id="src" placeholder="הכנס קישור לתמונה"></input>
            </li>
            <br />
            <li>
              <input id="price" placeholder="הכנס מחיר"></input>
            </li>
          </ul>
        </div>
      </div>

      <div className="">
        <button
          onClick={() => {
            const image = document.getElementById("src").value;
            const price = document.getElementById("price").value;
            const category = document.getElementById("category").value;
            const details = document.getElementById("details").value;
            const mcode = document.getElementById("mcode").value;
            if (!image || !price || !category || !details === null) {
              alert("You must fill in all fields");
            } else {
              alert("מוצר התווסף בהצלחה");

              handleRecipeformsubmit({
                image,
                category,
                details,
                price,
                mcode,
              });
            }
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddProductForm;
