import "./Slider.css";
import Image from "./Image";

//Developed by Javier Giberg
function Slider(props) {
  return (
    <div className="slider_container">
      <div className="silder_trak">
        <div className="slider_slide">
          <Image picC={props.picC} />
        </div>
      </div>
    </div>
  );
}

export default Slider;
