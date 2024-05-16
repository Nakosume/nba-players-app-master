import React, { useEffect, useState } from "react";
// comment
/*
  NBA Players
  Implement a React component that:
    1. Shows the list of players of each team.

  Example: Following the data from getPlayers service, the result should be as follows:
  ============================
  Team: Lakers
    - LeBron James
    - Anthony Davis
    - Thomas Bryant
  Team: Celtics
    - Jabari Bird
    - Michael Smith
  Team: Pistons
    - Zach Lofton
    - Keenan Evans
  ============================

  Note:
    - Consider getPlayers service as it was a real backend endpoint.
*/

const Services = {
  getPlayers() {
    const data = [
      { name: "LeBron", lastName: "James", weight: 100, teamName: "Lakers" },
      { name: "Thomas", lastName: "Bryant", weight: 100, teamName: "Lakers" },
      { name: "Zach", lastName: "Lofton", weight: 270, teamName: "Pistons" },
      { name: "Anthony", lastName: "Davis", weight: 100, teamName: "Lakers" },
      { name: "Jabari", lastName: "Bird", weight: 230, teamName: "Celtics" },
      { name: "Keenan", lastName: "Evans", weight: 170, teamName: "Pistons" },
      { name: "Michael", lastName: "Smith", weight: 100, teamName: "Celtics" },
    ];

    return Promise.resolve(data);

  },
};

export const NBAPlayers = (props) => {
  const {teams} = props
  return (
    <div>
      <h1>NBA Players</h1>
      <h2>Lakers</h2>
      {teams.Lakers.map((team)=>(
        <div>- {team.name} {team.lastName}</div>
      ))}
      <h2>Celtics</h2>
      {teams.Celtics.map((team)=>(
        <div>- {team.name} {team.lastName}</div>
      ))}
      <h2>Pistons</h2>
      {teams.Pistons.map((team)=>(
        <div>- {team.name} {team.lastName}</div>
      ))}
      
    </div>
  );
};

const groupBy = (input, key) => {
    return input.reduce((acc, currentValue) => {
      let groupKey = currentValue[key];
      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }
      acc[groupKey].push(currentValue);
      return acc;
    }, {});
  };

export default function App() {

  const [players, setPlayers] = useState([])

  useEffect(() => {
    Services.getPlayers()
      .then(data => {
        setPlayers(groupBy(data, 'teamName'))
      })
  }, [])

  return (
    <div className="App">
      <NBAPlayers teams={players} team={'Lakers'}/>
      {console.log(players)}
    </div>
  );

}
