import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../assets/Card-image/image 1.png";
import image2 from "../assets/Card-image/image 2.png";
import image3 from "../assets/Card-image/image 3.png";
import image4 from "../assets/Card-image/image 4.png";

const cardData = [
  { image: image1, value: "100", label: "Total Stations", bgColor: "#EEF2FF", textColor: "#1E40AF" },
  { image: image2, value: "85", label: "Online Stations", bgColor: "#DCFCE7", textColor: "#15803D" },
  { image: image3, value: "2", label: "In Alarm", bgColor: "#FEE2E2", textColor: "#DC2626" },
  { image: image4, value: "15", label: "Offline Stations", bgColor: "#FEF3C7", textColor: "#CA8A04" },
];

function Card() {
  return (
    <div className="container mt-3 l-6">
      <div className="row">
        {cardData.map((card, index) => (
          <div key={index} className="col-md-3">
            <div className="card shadow-sm p-3" style={{ backgroundColor: card.bgColor, border: "none" }}>
              <div className="card-body d-flex flex-column align-items-start">
                <img src={card.image} alt="icon" className="mb-2" />
                <h3 className="fw-bold" style={{ color: card.textColor }}>{card.value}</h3>
                <p className="mb-0" style={{ color: card.textColor }}>{card.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;

