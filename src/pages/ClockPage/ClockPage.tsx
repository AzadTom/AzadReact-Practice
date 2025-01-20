import "./style.css";
const ClockPage = () => {
  
  return (
    <section className="home-page">
      <div className="container">
        <div className="clock">
          <div className="hand" id="hour">
            <i></i>
          </div>
          <div className="hand" id="min">
            <i></i>
          </div>
          <div className="hand" id="sec">
            <i></i>
          </div>

          <span className="nums" style={{ transform: "rotate(30deg)" }}>
            <b>1</b>
          </span>
          <span className="nums" style={{ transform: "rotate(60deg)" }}>
            <b>2</b>
          </span>
          <span className="nums" style={{ transform: "rotate(90deg)" }}>
            <b>3</b>
          </span>
          <span className="nums" style={{ transform: "rotate(120deg)" }}>
            <b>4</b>
          </span>
          <span className="nums" style={{ transform: "rotate(150deg)" }}>
            <b>5</b>
          </span>
          <span className="nums" style={{ transform: "rotate(180deg)" }}>
            <b>6</b>
          </span>
          <span className="nums" style={{ transform: "rotate(210deg)" }}>
            <b>7</b>
          </span>
          <span className="nums" style={{ transform: "rotate(240deg)" }}>
            <b>8</b>
          </span>
          <span className="nums" style={{ transform: "rotate(270deg)" }}>
            <b>9</b>
          </span>
          <span className="nums" style={{ transform: "rotate(300deg)" }}>
            <b>10</b>
          </span>
          <span className="nums" style={{ transform: "rotate(330deg)" }}>
            <b>11</b>
          </span>
          <span className="nums" style={{ transform: "rotate(360deg)" }}>
            <b>12</b>
          </span>

          <div className="date">
            <span id="date-0">0</span>
            <span id="date-1">0</span>
          </div>
          <div className="day">
            <span id="day">MON</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClockPage;
