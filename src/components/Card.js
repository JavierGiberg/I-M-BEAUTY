import "./Card.css";
import { feedBack } from "../store/data";

function Card() {
  return (
    <div className="scroll-card">
      <div className="cards-container">
        {feedBack.map((data, index) => (
          <div className="card-container">
            <div className="lower-container">
              <h3>{data.name}</h3>
              <h4>{data.title}</h4>

              <section>
                <img src="image\c1.jpeg" alt="none" height="300" width="300" />
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
