import logo from './logo.svg';
import './App.css';

function App() {
var myHeaders = new Headers();
myHeaders.append("X-Auth-Token", "013031e615294e3888556572314e2c2a");
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://api.football-data.org/v2/competitions/2000/teams", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{result}</p>
      </header>
    </div>
  );
}

export default App;
