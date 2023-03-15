import { useState } from "react";
import "./AddProductForm.css";
import ImageUploadPreview from "./ImagesUploadPreview";
import FirebaseFirestoreService from "../../FirebaseFirestoreService";
function AddProductForm(props) {
  const [imageUrl, setImageUrl] = useState("");
  const [existingProduct, setexistingProduct] = useState(null);
  const [inputValue, setInputValue] = useState("aaaaa");
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
    props.handleFetchProduct();
    setImageUrl("");
    setexistingProduct(null);
    setInputValue("bbbbb");
  }
  function Filter(props) {
    return props.filter.map((colle, index) => (
      <option key={index} value={colle.collection}>
        {colle.collection}
      </option>
    ));
  }
  async function handleDeleteProduct(productID) {
    const deleteConfirmtion = window.confirm("האם אתה בטוח שאתה מוחק מוצר זה?");
    if (deleteConfirmtion) {
      try {
        await FirebaseFirestoreService.deleteDocument("product", productID);

        props.handleFetchProduct();
        setexistingProduct(null);

        window.scrollTo(0, 0);
        alert(`מוצר נחמק בהצלחה = ${productID}`);
        console.log(productID);
      } catch (error) {
        alert(error.message);
        throw error;
      }
    }
  }
  function handleEditRecipeClick(productID) {
    const selectedRecipe = props.product.find((product) => {
      return product.id === productID;
    });
    if (selectedRecipe) {
      setexistingProduct(selectedRecipe);
      window.scrollTo(0, document.body.scrollHeight);
    }
  }

  return (
    <div className="AddProductForm_container">
      <div className="AddProductForm_lis_container">
        <h1>אוסף מוצר לחנות</h1>
        <ImageUploadPreview
          basePath="product"
          existingImageUrl={imageUrl}
          handleUploadFinish={(downloadUrl) => {
            setImageUrl(downloadUrl);
          }}
          handleUploadCancel={() => setImageUrl("")}
        ></ImageUploadPreview>
        <div className="AddProductForm_list">
          <ul>
            <li>
              <select id="category">
                <Filter filter={props.sortlist} />
              </select>
            </li>
            <br />
            <li>
              <input id="mcode" placeholder={inputValue}></input>
            </li>
            <br />
            <li>
              <input id="details" placeholder="הכנס פרטי מוצר"></input>
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
            const image = imageUrl;
            const price = parseInt(document.getElementById("price").value);
            const category = document.getElementById("category").value;
            const details = document.getElementById("details").value;
            const mcode = document.getElementById("mcode").value;
            if (!price || !category || !details === null) {
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
      <div className="AddProductForm_product">
        {props.product.map((productmap, productID) => (
          // <div className="ProductForm_list" key={productID}>
          //   <ul>
          //     <li>{productID}</li>
          //   </ul>
          //   <ul>
          //     <li>{productmap.category}</li>
          //   </ul>
          //   <ul>
          //     <img src={productmap.image} width={"50px"} />
          //   </ul>
          //   <ul>
          //     <li>{productmap.details} </li>
          //   </ul>
          //   <ul>
          //     <li>{productmap.price} </li>
          //   </ul>
          //   <ul>
          //     <button
          //       type="button"
          //       onClick={() => handleDeleteProduct(productmap.id)}
          //     >
          //       מחק
          //     </button>
          //   </ul>
          // </div>
          <div className="container_products" key={productID}>
            {productID}
            <div>
              <div className="item_pic_products">
                <img
                  src={productmap.image}
                  alt="image"
                  className="image_products"
                />
              </div>
              <div className="details_main_container">
                <div className="details_main_products">
                  <section> : פרטים</section>
                  <section>{productmap.details}</section>
                  <section>{productmap.price} : מחיר</section>
                </div>

                <button className="buy_button_products">ערוך מוצר</button>
                <button
                  type="button"
                  onClick={() => handleDeleteProduct(productmap.id)}
                >
                  מחק מוצר
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddProductForm;
