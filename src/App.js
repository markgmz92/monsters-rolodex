import React, { Component } from "react";
import Logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Frankenstein",
          id: "Frank"
        },
        {
          name: "Dracula",
          id: "Dracula"
        },
        {
          name: "Zombie",
          id: "Zombie"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}> {monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
