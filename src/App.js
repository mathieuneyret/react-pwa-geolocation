import React from 'react';
import './App.css';
// import axios from 'axios';
import MapLeaflet from './components/map';

function App() {
  /*const config = {
      headers: { Authorization: 'Bearer e7f806bf7bbcc6d3f0e1a837bc97f73c722a5e375a16a8678fc5e532e1ab04b716a0c49b56c3aca8d05b0f75db1fed1667d0cbe5317760679b992273c8d95b21872684ef870e2d531eba1c1c41741b49436f6e05abd00505179e605a04d6a30ccb2f222280b6ef73627414f586755a6af137936ba8591b1e81c9e68819bcfcf4' }
  };
  const books = axios.get(
    'http://localhost:1337/api/books',
    config
  ).then(response => {
    console.log(response);
  });*/
  const books = [];

  return (
      <div className="App">
        <h1>Géolocalisation</h1>
        <div className="map">
          <MapLeaflet />
        </div>
        <ul>
          { books.map((book, i) =>
              <li key={i}>{ book }</li>
          )
          }
        </ul>
      </div>
  );
}

export default App;