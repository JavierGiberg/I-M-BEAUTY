import "./Card.css";

function Card(props) {
  return (
    <div className="scroll-card">
      <div className="cards-container">
        {props.product.map((data, index) => (
          <div className="card-container" key={index}>
            <div className="lower-container">
              <h3>{data.name}</h3>
              <h4>{data.title}</h4>

              <section>
                <img src={data.image} alt="none" height="300" width="300" />
              </section>
              <p>{data.fBack}</p>
              <button>להזמנה</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
