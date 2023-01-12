import Navbar from "./components/navbar/NavBar";
import "./App.css";
import Slider from "./components/slider/Slider";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Gallery from "./components/Gallery";
import VideoJS from "./components/VideoJS";
import Card from "./components/Card";
import { picC, video } from "./store/data";
import { FaArrowsAltH } from "react-icons/fa";

//Developed by Javier Giberg
function App() {
  const [titleNav, setTitleNav] = useState("עמוד הבית");

  const Home = () => {
    return (
      <div className="container">
        <div className="main">
          <img alt="Pic" src="image/mainPic.png" />
          <div className="titlesMains">
            <div className="titlesMain">
              <h1>מוצרים</h1>
              <Link
                onClick={() => {
                  setTitleNav("מוצרים");
                }}
                to={"/מוצרים"}
              >
                <img alt="Pic" src="image/test1.jpg" />
              </Link>
            </div>

            <div className="titlesMain">
              <h1>מוצרים1</h1>

              <Link
                onClick={() => {
                  setTitleNav("מוצרים1");
                }}
                to={"/מוצרים1"}
              >
                <img alt="Pic" src="image/test2.jpg" />
              </Link>
            </div>
          </div>
        </div>
        <div className="slider">
          <Slider picC={picC} />
        </div>
        <div className="footer">
          <div className="card">
            <h1>מוצרים3 </h1>
            <FaArrowsAltH size="50px" />
            <Card />
          </div>
          <Footer />
        </div>
      </div>
    );
  };
  return (
    <Router>
      <div className="container">
        <div className="header">
          <Navbar titleNav={titleNav} setTitleNav={setTitleNav} />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Gallery"
          element={<Gallery picC={picC} columnCount="2" gap="5" />}
        />
        <Route path="/Video" element={<VideoJS video={video} />} />
      </Routes>
    </Router>
  );
}

export default App;
