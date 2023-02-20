import React, { useState } from "react";
import "./Gallery.css";

function Gallery(props) {
  const [product, setProduct] = useState(props.product);
  const [imageBool, setImageBoll] = useState(false);
  const [tempPic, setTempPic] = useState();
  const [productTemp, setListTemp] = useState(props.product);
  const [selected, setSelected] = useState("כל המותגים");

  function Filter(props) {
    return props.filter.map((colle, index) => (
      <option key={index} value={colle.collection}>
        {colle.collection}
      </option>
    ));
  }

  function select(e) {
    console.log("product" + product);
    console.log("temp" + productTemp);
    //fuc for filter
    console.log(e);
    setSelected(e);
    Filters(e);
    console.log("product" + product);
    console.log("temp" + productTemp);
  }

  const Filters = (category) => {
    //fuc  filter
    let temp = productTemp;
    if (!(category === "כל המותגים")) {
      temp = productTemp.filter((pordu) => pordu.category === category);
      setProduct(temp);
    } else {
      setProduct(productTemp);
    }
  };

  const ImageView = () => {
    return (
      <div className="imageView_container">
        <div className="imageView">
          <section>
            <img src={tempPic.image} alt="" />
          </section>
        </div>
        <div className="call_item">
          <h2>{tempPic.category}</h2>
          <h2>{tempPic.details}</h2>
          <h2>{tempPic.price}: מחיר</h2>
          <button onClick={() => props.handleAddToCart(tempPic)}>
            אוסף לסל
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="containerG">
      <div className="search_container">
        <select className="search-bar" onChange={(e) => select(e.target.value)}>
          <Filter filter={props.sortlist} />
        </select>
      </div>
      {imageBool ? (
        <ImageView />
      ) : (
        <div className="concontainer_Gallery">
          <div style={{ columns: props.columnCount, columnGap: 0 }}>
            {product.map((img, index) => (
              <section
                key={index}
                onClick={() => {
                  setImageBoll(true);
                  setTempPic(img);
                }}
                style={{ padding: props.gap / 2 }}
              >
                {!imageBool && (
                  <img src={img.image} alt="" className="imageGallery" />
                )}
              </section>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
