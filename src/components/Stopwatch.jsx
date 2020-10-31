import React from "react";

class Stopwatch extends React.Component{
  tickRef;
  state = {
    isRunning: false,
    timer: 0
  }
  tick = () => {
    if(this.state.isRunning){
      this.setState({timer: this.state.timer + 1});
}
}
  // DOM이 렌더링 된 직후에 호출
  // REST API 호출, 3rd 라이브러리 로딩
  componentDidMount() {
    // 1초마다 호출되는 함수
    // this.tickRef = setInterval(() => {}, 1000);
    this.tickRef = setInterval(this.tick, 1000);
  }

  // DOM이 파괴되기 직전에 호출되는 라이프 사이클 메서드
  componentWillUnmount() {
    clearInterval(this.tickRef);
  }

  getButton = () => {
    if(this.state.isRunning){
      return(
        <button onClick={()=> this.setState({isRunning: !this.state.isRunning})}>Stop</button>
      );
    }
    else{
      return (
      <button onClick={()=> this.setState({isRunning: !this.state.isRunning})}>Start</button>
      );
    }
  }

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{this.state.timer}</span>
        {
          this.getButton()
          // this.state.isRunning ? <button>Stop</button> : <button>Start</button>
        }
        <button>Reset</button>
      </div>
    )
  }
}

export default Stopwatch;