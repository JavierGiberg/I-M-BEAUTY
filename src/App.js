import Navbar from "./components/navbar/NavBar";
import "./App.css";
import Slider from "./components/slider/Slider";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Gallery from "./components/Gallery";
import Card from "./components/Card";
import { FaArrowsAltH } from "react-icons/fa";
import AddProductForm from "./components/Manager/AddProductForm";
import firebase from "./FirebaseConfig";
import ShoppingCart from "./components/ShoppingCart";
import FirebaseFirestoreService from "./FirebaseFirestoreService";
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
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    var price = 0;
    if (cartTotal == 0 || cartTotal == 0.0) {
      setCartTotal(item.price);
    } else {
      for (let i = 0; i < cartItems.length; i++) {
        price += cartItems[i].price;
      }
      setCartTotal(price.toFixed(1));
    }
    console.log(price);
  };

  const handleRemoveItem = (item) => {
    var toRemove = item;
    var index = cartItems.indexOf(toRemove);
    if (index > -1) {
      cartItems.splice(index, 1);
      console.log(cartItems);
      var price = 0;
      for (let i = 0; i < cartItems.length; i++) {
        price += cartItems[i].price;
      }

      setCartItems(cartItems);
      setCartTotal(price.toFixed(1));
    }
  };

  const handleCheckout = () => {
    // Handle checkout logic
  };

  const db = firebase.firestore();

  useEffect(() => {
    fetchProduct().then((fetchedProduct) => {
      setProduct(fetchedProduct);
    });
  }, []);

  async function fetchProduct() {
    let fechedtProduct = [];

    try {
      const response = await FirebaseFirestoreService.readDocuments("product");

      const newProduct = response.docs.map((productDoc) => {
        const id = productDoc.id;
        const data = productDoc.data();

        return { ...data, id };
      });
      fechedtProduct = [...newProduct];
    } catch (error) {
      throw error;
    }
    return fechedtProduct;
  }

  async function handleFetchProduct() {
    try {
      const fetchedProduct = await fetchProduct();

      setProduct(fetchedProduct);
    } catch (error) {
      throw error;
    }
  }

  const Home = () => {
    return (
      <div className="container">
        <section className="slider">
          <Slider picC={product} />
        </section>
        <div className="main">
          <img
            onClick={() => {
              console.log(product[2].id);
            }}
            alt="Pic"
            src="image/test2.jpg"
          />

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
              <h1> חבילות ומבצעים</h1>
              <Link
                onClick={() => {
                  setTitleNav("מבצעים");
                }}
                to={"/מבצעים"}
              >
                <img alt="Pic" src="image\tets1.jpg" />
              </Link>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="card">
            <FaArrowsAltH size="50px" />
            <Card product={product} handleAddToCart={handleAddToCart} />
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
        <Route
          path="/"
          element={
            <div>
              <div className="video_home">
                <video src="video/video1.MP4" autoPlay loop muted />
              </div>
              <Home />
            </div>
          }
        />
        <Route
          path="/Gallery"
          element={
            <Gallery
              handleAddToCart={handleAddToCart}
              product={product}
              sortlist={sortlist}
              columnCount="2"
              gap="5"
            />
          }
        />
        <Route
          path="/ShoppingCart"
          element={
            <ShoppingCart
              items={cartItems}
              total={cartTotal}
              removeItem={handleRemoveItem}
              checkout={handleCheckout}
            />
          }
        />
        <Route
          path="/AddProduct"
          element={
            <AddProductForm
              sortlist={sortlist}
              product={product}
              handleFetchProduct={handleFetchProduct}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
