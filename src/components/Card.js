import "./Card.css";

function Card(props) {
  return (
    <div className="scroll-card">
      <div className="cards-container">
        {props.product.map((data, index) => (
          <div className="card-container" key={index}>
            <div className="lower-container">
              <h3>{data.category}</h3>

              <section>
                <img src={data.image} alt="none" height="300" width="300" />
              </section>
              <h4>{data.details}</h4>
              <h4> {data.price}:מחיר</h4>
              <button>להזמנה</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
