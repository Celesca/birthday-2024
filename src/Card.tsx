import "./Card.css";

export default function Card() {
    return (
        <div className="card-container">
    <div className="birthdayCard">
      <div className="cardFront">
        <h3 className="happy">HAPPY BIRTHDAY Kaew!</h3>
        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
        </div>
      </div>
      <div className="cardInside">
        <h3 className="back">HAPPY BIRTHDAY NA!</h3>
        <p>Dear แก้ว,</p>
        <p>
          สุขสันต์วันเกิด ขอให้โลกใจดีกับเธอ ขอให้หัวเราะมากๆ มีความสุขมากๆ
          เข้าใจและรู้ว่าเธอกำลังพยายาม สักวันเธอจะต้องประสบความสำเร็จอย่างแน่นอน ฉันเชื่อแบบนั้น :)
        </p>
      </div>
    </div>
    </div>

    )}