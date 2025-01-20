import React, { useEffect } from "react";
import "./style.css";




const ClockPage = () => {

  const displayTime = () => {
    const hr = document.getElementById("hour");
    const min = document.getElementById("min");
    const sec = document.getElementById("sec");
  
    const date = new Date();
    const hh = date.getHours();
    const mm = date.getMinutes();
    const ss = date.getSeconds();
  
    const hR = 30 * hh + mm / 2;
    const mR = 6 * mm;
    const sR = 6 * ss;
  
    if (hr && min && sec) {
      hr.style.transform = `rotate(${hR}deg)`;
      min.style.transform = `rotate(${mR}deg)`;
      sec.style.transform = `rotate(${sR}deg)`;
    }
  };
  
  const setDays = () => {
    const date0 = document.getElementById("date-0");
    const date1 = document.getElementById("date-1");
    const daySpan = document.getElementById("day");
    const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  
    const date = new Date();
    const dt = date.getDate();
    const day = date.getDay();
    const paddedDate = dt.toString().padStart(2, "0");
  
    if (date0 && date1 && daySpan) {
      date0.innerText = paddedDate[0];
      date1.innerText = paddedDate[1];
      daySpan.innerText = weekDays[day];
    }
  };

  

  useEffect(() => {
    setInterval(() => {
      displayTime();
    }, 1000);
    setDays();
  }, []);

  return (
    <section>
      <div className="container">
        <div className="clock">
          {/* hour,minute,second */}
          <div className="hand" id="hour">
            <i></i>
          </div>
          <div className="hand" id="min">
            <i></i>
          </div>
          <div className="hand" id="sec">
            <i></i>
          </div>
          {/* hour,minute,second */}
          {/* nums */}
          {Array.from({ length: 12 }).map((_, index: number) => (
            <span
               key={index+1}
              className="nums"
              style={{ "--i": index + 1 } as React.CSSProperties}
            >
              <b>{index + 1}</b>
            </span>
          ))}
          {/* nums */}
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

