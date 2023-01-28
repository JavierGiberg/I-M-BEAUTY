import Navbar from "./components/navbar/NavBar";
import "./App.css";
import Slider from "./components/slider/Slider";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Gallery from "./components/Gallery";
import Card from "./components/Card";
import { FaArrowsAltH } from "react-icons/fa";
import AddProductForm from "./components/AddProductForm";
import firebase from "./FirebaseConfig";
//Developed by Javier Giberg
function App() {
  const [product, setProduct] = useState([]);
  const [titleNav, setTitleNav] = useState("עמוד הבית");
  const [sortlist] = useState([
    //state for filter product
    {
      collection: "כל המותגים",
    },
    {
      collection: "LA BEAUTE",
    },
    {
      collection: "OLAPLEX",
    },
    {
      collection: "PEPTID+",
    },
    {
      collection: "SCHWARZKOPF",
    },
    {
      collection: "KASHMIR",
    },
    {
      collection: "COS ME TIK",
    },
    {
      collection: "BIOTOP",
    },
    {
      collection: "PAUL MITCHELL",
    },
    {
      collection: "SUPREMA COLOR",
    },
    {
      collection: "SCHWARTZ",
    },
  ]);

  const db = firebase.firestore();

  useEffect(() => {
    db.collection("product")
      .get()
      .then((snapshot) => {
        if (snapshot.docs.length > 0) {
          snapshot.docs.forEach((doc) => {
            setProduct((prev) => {
              return [...prev, doc.data()];
            });
          });
        }
      });
  }, [db]);

  const Home = () => {
    return (
      <div className="container">
        <section className="slider">
          <Slider picC={product} />
        </section>
        <div className="main">
          <img alt="Pic" src="image/test2.jpg" />

          <div className="titlesMains">
            <div className="titlesMain">
              <h1>לכל המוצרים</h1>
              <Link
                onClick={() => {
                  setTitleNav("כל המוצרים");
                }}
                to={"/Gallery"}
              >
                <img alt="Pic" src="image/allproduct.png" />
              </Link>
            </div>

            <div className="titlesMain">
              <Link
                onClick={() => {
                  setTitleNav("מבצעים");
                }}
                to={"/מבצעים"}
              >
                <img alt="Pic" src="image/test2.jpg" />
              </Link>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="card">
            <FaArrowsAltH size="50px" />
            <Card product={product} />
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
          element={
            <Gallery
              product={product}
              sortlist={sortlist}
              columnCount="2"
              gap="5"
            />
          }
        />
        <Route
          path="/AddProduct"
          element={<AddProductForm sortlist={sortlist} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
