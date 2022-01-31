import './App.css';
import { useState, useEffect, requestOptions } from 'react'

function App() {
let [ data, setData ] = useState(null)
let myHeaders = new Headers();
myHeaders.append("X-Auth-Token", "013031e615294e3888556572314e2c2a");
let requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

useEffect(() => {
  fetch("http://api.football-data.org/v2/competitions/2000/teams", requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json();
    })
    .then((actualData) => setData(actualData))
    .catch((err) => {
      console.log(err.message);
    });
}, []);
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          { data && data.teams.map((team, id) => {
              return <li key={id} className='text-red-500'>{team.name}</li>
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;