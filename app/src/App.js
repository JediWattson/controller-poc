import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState({})

  useEffect(()=>{
    fetch("http://localhost:4000/")
      .then(r=>r.json())
      .then(setData)
      .catch(console.log)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="data-test">
          {data.msg || 'Fetching...'}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          onClick={e=>{
            e.preventDefault()
            fetch(
              "http://localhost:4000/notify",
              {
                method: 'POST',
                headers : new Headers({ "Content-Type": "application/json" }),
                body: JSON.stringify({user: 'test'})
              }
            )
            .then(res => res.json())
            .then(console.log)
          }}
          id="button-test"
          style={{margin: 16, padding: 16}}
        >
          notify someone
        </button>
      </header>
    </div>
  );
}

export default App;
