//import './App.css';
//import { useState } from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <main>
      <header className="App-header">
        <Navbar />
      </header>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ItemListContainer />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ItemDetailContainer />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;