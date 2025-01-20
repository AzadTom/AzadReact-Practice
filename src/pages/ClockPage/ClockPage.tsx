import { useEffect } from "react";
import "./style.css";
const ClockPage = () => {
  useEffect(() => {
    const hr = document.getElementById("hour");
    const min = document.getElementById("min");
    const sec = document.getElementById("sec");

    function displayTime() {
      const date = new Date();
      const hh = date.getHours();
      const mm = date.getMinutes();
      const ss = date.getSeconds();
      const hR = 30 * hh + mm / 2;
      const mR = 6 * mm;
      const sR = 6 * ss;

      hr.style.transform = `rotate(${hR}deg)`;
      min.style.transform = `rotate(${mR}deg)`;
      sec.style.transform = `rotate(${sR}deg)`;
    }

    setInterval(displayTime, 1000);
    const date0 = document.getElementById("date-0");
    const date1 = document.getElementById("date-1");
    const daySpan = document.getElementById("day");
    const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    function setDayDate() {
      const date = new Date();
      const dt = date.getDate();
      const paddedDate = dt.toString().padStart(2, "0");
      date0.innerText = paddedDate[0];
      date1.innerText = paddedDate[1];
      const day = date.getDay();
      daySpan.innerText = weekDays[day];
    }

    setDayDate();
    setInterval(setDayDate, 60000);
  }, []);
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
