import React, { useState } from "react";
import "./Gallery.css";

function Gallery(props) {
  const [imageBool, setImageBoll] = useState(false);
  const [tempPic, setTempPic] = useState();

  const ImageView = () => {
    return (
      <div className="imageView_container">
        <div className="imageView">
          <section>
            <img src={tempPic.image} />
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

          <a href="https://wa.me/972507644343">
            <img src="image/whatsapp.png" width="100px" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="containerG">
      {imageBool ? (
        <ImageView />
      ) : (
        <div className="concontainer_Gallery">
          <div style={{ columns: props.columnCount, columnGap: 0 }}>
            {props.picC.map((img, index) => (
              <section
                key={index}
                onClick={() => {
                  setImageBoll(true);
                  setTempPic(img);
                }}
                style={{ padding: props.gap / 2 }}
              >
                {!imageBool && <img src={img.image} className="imageGallery" />}
              </section>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Gallery;
