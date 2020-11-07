import React, {useEffect, useRef, useState} from "react";

function Stopwatch() {
  let tickRef;
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  const refIsRunning = useRef(false);

  const tick = () =>{
    console.log(refIsRunning.current, timer);
    if (refIsRunning.current) {
      setTimer(timer => timer + 1);
    }
  }

  useEffect(()=> {
    tickRef = setInterval(tick, 1000);
    return () => {
      clearInterval(tickRef);
    }
  }, []);

  const getButton = () => {
    if(isRunning){
      refIsRunning.current = true;
      return(
        <button onClick={()=> setIsRunning(!isRunning)}>stop</button>
      );
    }
    else{
      refIsRunning.current = false;
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