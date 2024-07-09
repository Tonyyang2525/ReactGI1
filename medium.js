import "./App.css";
import React, { Component } from "react";

const BasicInfo = ({ person }) => (
  <div>
    <p>Name: {person.name}</p>
    <p>Number: {person.number}</p>
    <p>Date of Birth: {person.dateOfBirth}</p>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: "Naruto Uzamaki",
        number: "123-456-7890",
        dateOfBirth: "01/01/1999",
      },
    };
  }

  render() {
    const { person } = this.state;
    return (
      <div>
        <BasicInfo person={person} />
      </div>
    );
  }
}

export default App;
