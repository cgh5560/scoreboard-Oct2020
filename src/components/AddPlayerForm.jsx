import React from "react";

class AddPlayerForm extends React.Component{
  // class Component를 만들기 위해서는 반드시 render를 통해 element를 return해주어야한다.
  state = {
    value : ''
  }
  handleValueChange = (e) => {
    this.setState({value: e.target.value});
  }
  handleSubmit = (e) => {
    // default로 일어나는 action=""을 막아준다
    e.preventDefault();
    console.log('handleSubmit');
    this.props.addPlayer();
  }
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input type="text" className="input" placeholder="enter a player's name"
          value={this.state.value}
          onChange={this.handleValueChange}/>
        <input type="submit" className="input" value="Add Player"/>
      </form>
    );
  }
}

export default AddPlayerForm;