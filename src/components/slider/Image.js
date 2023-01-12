import "./Slider.css";
//Developed by Javier Giberg

function Image({ picC }) {
  return picC.map((picC, index) => {
    return (
      <img
        className="imgZ"
        src={picC.image}
        key={index}
        alt="Images Slide"
      ></img>
    );
  });
}

export default Image;
