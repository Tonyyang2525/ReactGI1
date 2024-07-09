import "./App.css";
//Problem 2: EASY
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {},
    };
  }

  render() {
    return (
      <div>
        <p>Name: Naruto Uzamaki</p>
        <p>Number: 123-456-7890</p>
        <p>Date of Birth: 01/01/1999</p>
      </div>
    );
  }
}

// export default App;
