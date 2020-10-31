import React from 'react';
import Counter from "./Counter";

// 객체 할당 기법으로 props를 모두 해체
function Player({score, removePlayer, name, id}) {
  return (
    <div className='player'>
    <span className='player-name'>
      <button className='remove-player'
              onClick={() => removePlayer(id)}>x</button>
    </span>
      <span className='player-name'>{name}</span>
      <Counter score={score}/>
    </div>
  );
}

export default Player;