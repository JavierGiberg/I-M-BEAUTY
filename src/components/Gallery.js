import React, { useState } from "react";
import "./Gallery.css";

function Gallery(props) {
  const [imageBool, setImageBoll] = useState(false);
  const [tempPic, setTempPic] = useState();

  function Filter(props) {
    return props.filter.map((colle, index) => (
      <option key={index} value={colle.collection}>
        {colle.collection}
      </option>
    ));
  }

  const ImageView = () => {
    return (
      <div className="imageView_container">
        <div className="imageView">
          <section>
            <img src={tempPic.image} alt="" />
          </section>
        </div>
        <div className="call_item">
          <h2
            onClick={() => {
              setImageBoll(false);
            }}
          >
            Back
          </h2>
          <h2>Send message</h2>

          <a href="https://wa.me/000000000">
            <img src="image/whatsapp.png" width="100px" alt="" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="containerG">
      <div className="search_container">
        <select
          className="search-bar"
          onChange={(e) => props.select(e.target.value)}
        >
          <Filter filter={props.sortlist} />
        </select>
      </div>
      {imageBool ? (
        <ImageView />
      ) : (
        <div className="concontainer_Gallery">
          <div style={{ columns: props.columnCount, columnGap: 0 }}>
            {props.product.map((img, index) => (
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
