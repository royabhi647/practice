import React, { useRef, useState, useEffect } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const formatTime = (timeInSeconds) => {
    const minutes = String(Math.floor(timeInSeconds / 60)).padStart(2, '0');
    const seconds = String(timeInSeconds % 60).padStart(2, '0');
    return `${minutes}:${seconds}`
  }

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000)
    } 
  }

  const pauseTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  }

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  },[])

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <div style={{width: "262px", height: "262px", marginTop: "50px", background: "#E15241", borderRadius: "12px", padding: "10px"}}>
        <p style={{fontSize: "12px", fontWeight: 400}}>Projekt</p>
        <p style={{fontSize: "16px", fontWeight: 700}}>Time Tracking</p>

        <div style={{marginTop: "40px", display: "flex", justifyContent: "center"}}>
          <h1 style={{fontSize: "85px"}}>{formatTime(timer)}</h1>
        </div>

        <div style={{marginTop: "20px", display: "flex", justifyContent: "space-around"}}>
          <button style={{padding: "5px 10px", border: "none", borderRadius: '5px', cursor: 'pointer'}} onClick={startTimer}>Start</button>
          <button style={{padding: "5px 10px", border: "none", borderRadius: '5px', cursor: 'pointer'}} onClick={pauseTimer}>Pause</button>
        </div>
      </div>
    </div>
  )
}

export default Timer;
