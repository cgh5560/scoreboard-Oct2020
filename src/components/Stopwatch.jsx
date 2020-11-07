import React, {useEffect, useRef, useState} from "react";
import {useInterval} from "../hooks/useInterval";

function Stopwatch() {
  let tickRef;
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  useInterval(() => {
    if (isRunning) {
      setTimer(timer + 1);
    }
  }, 1000);

  const getButton = () => {
    if(isRunning){
      return(
        <button onClick={()=> setIsRunning(!isRunning)}>stop</button>
      );
    }
    else{
      return (
      <button onClick={()=> setIsRunning(!isRunning)}>start</button>
      );
    }
  }

    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{timer}</span>
        {
          getButton()
          // this.state.isRunning ? <button>Stop</button> : <button>Start</button>
        }
        <button>Reset</button>
      </div>
    )
  }


export default Stopwatch;