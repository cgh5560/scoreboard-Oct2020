import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import Player from "./components/Player";


class App extends React.Component {
  state = {
    players: [
      {name: 'Geunhwan', id: 1},
      {name: 'Donghoon', id: 2},
      {name: 'Hyeoncheol', id: 3},
      {name: 'Jaeho', id: 4},
    ]
  }
  // 1) player 삭제 콜백 펑션 정의
  handleRemovePlayer = (id) => {
    console.log('handleRemovePlayer:', id);

    this.setState((prevState) => {

      const players = prevState.players.filter((player) => player.id !== id);
      return { players: players};

      // players: prevState.players.filter(item => item.id !== id)
      // id가 1이 들어왔을 때, false true true true 이므로 LDK 빼고 출력 된다.
    })
  }

  render() {
    return (
      <div className='scoreboard'>
        <Header title='My Scoreboard' totalPlayers={11}/>

        {
          this.state.players.map(player => (
            <Player name={player.name} key={player.id} id={player.id}
                    removePlayer={this.handleRemovePlayer}/>
          ))
        }
      </div>
    );
  }
}

export default App;