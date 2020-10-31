import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import Player from "./components/Player";


class App extends React.Component {
  state = {
    players: [
      {name: 'Geunhwan', score:0, id: 1},
      {name: 'Donghoon', score:0, id: 2},
      {name: 'Hyeoncheol', score:0, id: 3},
      {name: 'Jaeho', score:0, id: 4},
    ]
  }
  // 1) player 삭제 콜백 펑션 정의
  handleRemovePlayer = (id) => {
    console.log('handleRemovePlayer:', id);

    this.setState((prevState) => {

      const players = prevState.players.filter((player) => player.id !== id);
      // short hand property : key 와 value가 같으면 하나를 생략
      // return { players:players} 와 동일
      return { players};

      // players: prevState.players.filter(item => item.id !== id)
      // id가 1이 들어왔을 때, false true true true 이므로 LDK 빼고 출력 된다.
    })
  }

  handleChangeScore = (delta, id) => {
    console.log('handleChangeScore:', delta, id);
    this.setState((prevState) => {
      // 원본 배열 players를 ...을 통해 새로운 메모리에 카피하여 players에 담았다.
      const players = [ ...prevState.players];
      players.forEach(player => {
        if(player.id === id){ // parameter로 넘어온 id와 일치하는 id인 player의 score값에 delta값을 더해준다.
          player.score += delta;
        }
      })
      return { players:players};
    })
  }

  render() {
    return (
      <div className='scoreboard'>
        <Header title='My Scoreboard' players={this.state.players}/>

        {
          this.state.players.map(player => (
            <Player name={player.name} key={player.id} id={player.id} score={player.score}
                    changeScore={this.handleChangeScore}  // function의 결과값이 아닌 function 자체를 내려준다
                    removePlayer={this.handleRemovePlayer}/>
          ))
        }
      </div>
    );
  }
}

export default App;