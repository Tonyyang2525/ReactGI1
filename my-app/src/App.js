import "./App.css";

//Problem 1: VERY EASY
// import React, { Component } from "react";

// class App extends Component {
//   render() {
//   return (
//     <div className="person">
//        <p>Name: Naruto Uzumaki</p>
//        <p>Number: 123-456-7890</p>
//       <p>Date of Birth: 1/1/1999</p>
//     </div>
//   );
//   }
// }

// export default App;
// END of Problem 1

//Problem 2: EASY
// import React, { Component } from "react";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {},
//     };
//   }

//   render() {
//     return (
//       <div>
//         <p>Name: Naruto Uzamaki</p>
//         <p>Number: 123-456-7890</p>
//         <p>Date of Birth: 01/01/1999</p>
//       </div>
//     );
//   }
// }

// export default App;
// END of Problem 2

//Problem 3: MEDIUM
// import React, { Component } from "react";

// const BasicInfo = ({ person }) => (
//   <div>
//     <p>Name: {person.name}</p>
//     <p>Number: {person.number}</p>
//     <p>Date of Birth: {person.dateOfBirth}</p>
//   </div>
// );

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {
//         name: "Naruto Uzamaki",
//         number: "123-456-7890",
//         dateOfBirth: "01/01/1999",
//       },
//     };
//   }

//   render() {
//     const { person } = this.state;
//     return (
//       <div>
//         <BasicInfo person={person} />
//       </div>
//     );
//   }
// }

// export default App;
// END of Problem 3

//Problem 4: HARD
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
// END of Problem 4
