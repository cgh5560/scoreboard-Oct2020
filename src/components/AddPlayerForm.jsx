import React, {useRef, useState} from "react";

function AddPlayerForm(props) {
  const [value, setValue] = useState('');

  // const formRef = useRef(null);
  // const textRef = useRef(null);

  const formRef = useRef(null);
  const textRef = useRef(null);

  const handleValueChange = (e) => {
    setValue(e.target.value);
  }
  const handleSubmit = (e) => {
    // default로 일어나는 action=""을 막아준다
    e.preventDefault();
    console.log('handleSubmit');
    // text 노드에 접근하는 방법
    const form = formRef.current;
    const player = textRef.current; // document.getElementById(id)와 동일
    console.log(form.checkValidity()); // 폼 내의 모든 입력 validation을 check
    console.log(player.validity.valid); // 입력의 9가지 validation을 check
    if (!form.checkValidity()) {
      // invalid 폼을 찾아서 error문구 표시
      return;
    }

    props.addPlayer(value);
    setValue('');
  }
  return (
    // noValidate를 추가하면 validation check를 하지 않는다.
    <form ref={formRef} className="form" onSubmit={handleSubmit} noValidate>
      <input ref={textRef} type="text" className="input" required // required 한 줄 추가로 validation이 가능하다. (html5)
             placeholder="enter a player's name"
             value={value}
             onChange={handleValueChange}/>
      <input type="submit" className="input" value="Add Player"/>
    </form>
  );
}

export default AddPlayerForm;