import React from "react";
import "./VideoJS.css";
function VideoJS(props) {
  return (
    <div className="vidoe_container">
      <div>
        {props.video.map((video, index) => (
          <div key={index}>
            <img src="image/logo.png" alt="none" height="100px" width="100px" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoJS;
