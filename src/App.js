import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header";
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
import CustomPlayer from "./components/CustomPlayer";
import _ from 'lodash';

let maxId = 4;

function App(props) {
  // 변수, set변수 = useState(초기값)
  const [players, setPlayers] = useState([
    {name: 'Geunhwan', score: 0, id: 1},
    {name: 'Donghoon', score: 0, id: 2},
    {name: 'Hyeoncheol', score: 0, id: 3},
    {name: 'Jaeho', score: 0, id: 4},
  ]);

  const handleRemovePlayer = (id) => {
    console.log('handleRemovePlayer:', id);

    this.setState((prevState) => {

      const players = prevState.players.filter((player) => player.id !== id);
      return {players};
    })
  }

  const handleChangeScore = (delta, id) => {
    console.log('handleChangeScore:', delta, id);
    this.setState((prevState) => {
      const players = [...prevState.players];
      players.forEach(player => {
        if (player.id === id) {
          player.score += delta;
        }
      })
      return {players: players};
    })
  }

  const handleAddPlayer = (name) => {
    console.log('handleAddPlayer : ', name);
    this.setState(prevState => {
      const players = [...prevState.players]
      players.push({name: name, score: 0, id: ++maxId});
      return {players};
    })
  }

  const getHighScore = () => {
    let maxHighScore = 0;
    const maxObj = _.maxBy(this.state.players, 'score');
    return maxObj.score ? maxObj.score : null;
  }

  return (
    <div className='scoreboard'>
      <Header title='My Scoreboard' players={this.state.players}/>

      {
        this.state.players.map(player => (
          <CustomPlayer name={player.name} key={player.id} id={player.id} score={player.score}
                        isHighScore={player.score === this.getHighScore()}
                        changeScore={this.handleChangeScore}  // function의 결과값이 아닌 function 자체를 내려준다
                        removePlayer={this.handleRemovePlayer}/>
        ))
      }
      <AddPlayerForm addPlayer={this.handleAddPlayer}></AddPlayerForm>
    </div>
  );
}

export default App;