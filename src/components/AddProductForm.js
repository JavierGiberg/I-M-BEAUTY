import { useState } from "react";
import FirebaseFirestoreService from "../FirebaseFirestoreService";
function AddProductForm() {
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

  return (
    <div className="AddDreams_Background">
      <div className="AddDreams_Container">
        <div className="AddDreams_titleCloseBtn">
          <button>X</button>
        </div>
        <div className="AddDreams_title">
          <h3>Add product</h3>
          <div className="AddDreams_list">
            <ul className="AddDreams_list_ul">
              <li>
                *<input id="src" placeholder="Enter Url image"></input>
              </li>
              <br />
              <li>
                *<input id="details" placeholder="Enter details"></input>
              </li>
              <br />
              <li>
                *<input id="category" placeholder="Enter category"></input>
              </li>
              <br />
              <li>
                *<input id="price" placeholder="Enter price"></input>
              </li>
            </ul>
          </div>
        </div>

        <div className="AddDreams_footer">
          <button>Cancel</button>
          <button
            onClick={() => {
              const image = document.getElementById("src").value;
              const price = document.getElementById("price").value;
              const category = document.getElementById("category").value;
              const details = document.getElementById("details").value;
              if (!image || !price || !category || !details === null) {
                alert("You must fill in all fields");
              } else {
                alert("מוצר התווסף בהצלחה");

                handleRecipeformsubmit({
                  image,
                  category,
                  details,
                  price,
                });
              }
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProductForm;
