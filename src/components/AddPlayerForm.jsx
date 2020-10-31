import React from "react";

class AddPlayerForm extends React.Component{
  // class Component를 만들기 위해서는 반드시 render를 통해 element를 return해주어야한다.
  state = {
    value : ''
  }
  handleValueChange = (e) => {
    this.setState({value: e.target.value});
  }
  render() {
    return (
      <form className="form">
        <input type="text" className="input" placeholder="enter a player's name"
          value={this.state.value}
          onChange={this.handleValueChange}/>
        <input type="submit" className="input" value="Add Player"/>
      </form>
    );
  }
}

export default AddPlayerForm;