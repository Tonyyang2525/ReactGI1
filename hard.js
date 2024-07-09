import "./App.css";
import React, { Component } from "react";

// BasicInfo component to display person's information
const BasicInfo = ({ person }) => (
  <div style={{ border: "solid 1px black", padding: 10, margin: 10 }}>
    <p>Name: {person.name}</p>
    <p>Number: {person.number}</p>
    <p>Date of Birth: {person.dateOfBirth}</p>
    <p>Team: {person.team}</p>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: "Naruto Uzumaki",
          number: "123-456-7890",
          dateOfBirth: "01/01/1999",
          team: 7,
        },
        {
          name: "Sasuke Uchiha",
          number: "987-654-3210",
          dateOfBirth: "1985-05-15",
          team: 7,
        },
        {
          name: "Sakura Haruno",
          number: "555-123-4567",
          dateOfBirth: "1978-11-30",
          team: 7,
        },
      ],
    };
  }

  render() {
    const { people } = this.state;
    return (
      <div>
        {people.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}

export default App;
