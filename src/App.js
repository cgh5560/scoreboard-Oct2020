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

    const newPlayers = players.filter((player) => player.id !== id);
    setPlayers(newPlayers); // 비동기 실행된다.
  }

  const handleChangeScore = (delta, id) => {
    console.log('handleChangeScore:', delta, id);
    const newPlayers = [...players];
    newPlayers.forEach(player => {
      if (player.id === id) {
        player.score += delta;
      }
    })
    setPlayers(newPlayers);
  }

  const handleAddPlayer = (name) => {
    console.log('handleAddPlayer : ', name);
    const newPlayers = [...players]
    newPlayers.push({name: name, score: 0, id: ++maxId});
    setPlayers(newPlayers);
  }

  const getHighScore = () => {
    let maxHighScore = 0;
    const maxObj = _.maxBy(players, 'score');
    return maxObj.score ? maxObj.score : null;
  }

  return (
    <div className='scoreboard'>
      <Header title='My Scoreboard' players={players}/>

      {
        players.map(player => (
          <CustomPlayer name={player.name} key={player.id} id={player.id} score={player.score}
                        isHighScore={player.score === getHighScore()}
                        changeScore={handleChangeScore}  // function의 결과값이 아닌 function 자체를 내려준다
                        removePlayer={handleRemovePlayer}/>
        ))
      }
      <AddPlayerForm addPlayer={handleAddPlayer}></AddPlayerForm>
    </div>
  );
}

export default App;