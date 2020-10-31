import React from "react";

class AddPlayerForm extends React.Component{
  // class Component를 만들기 위해서는 반드시 render를 통해 element를 return해주어야한다.
  state = {
    value : ''
  }

  constructor(props) {
    super(props);
    // createRef는 class Component에서만 사용 가능
    this.formRef = React.createRef();
    this.textRef = React.createRef();
  }

  handleValueChange = (e) => {
    this.setState({value: e.target.value});
  }
  handleSubmit = (e) => {
    // default로 일어나는 action=""을 막아준다
    e.preventDefault();
    console.log('handleSubmit');
    // text 노드에 접근하는 방법
    const form = this.formRef.current;
    const player = this.textRef.current; // document.getElementById(id)와 동일
    console.log(form.checkValidity()); // 폼 내의 모든 입력 validation을 check
    console.log(player.validity.valid); // 입력의 9가지 validation을 check
    if(!form.checkValidity()){
      // invalid 폼을 찾아서 error문구 표시
      return;
    }

    this.props.addPlayer(this.state.value);
    this.setState({value: ''});
  }
  render() {
    return (
      // noValidate를 추가하면 validation check를 하지 않는다.
      <form ref={this.formRef} className="form" onSubmit={this.handleSubmit} noValidate>
        <input ref={this.textRef} type="text" className="input" required // required 한 줄 추가로 validation이 가능하다. (html5)
               placeholder="enter a player's name"
          value={this.state.value}
          onChange={this.handleValueChange}/>
        <input type="submit" className="input" value="Add Player"/>
      </form>
    );
  }
}

export default AddPlayerForm;