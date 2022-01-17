//import './App.css';
//import { useState } from 'react';
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
    </div>
    </main>
  );
}

export default App;