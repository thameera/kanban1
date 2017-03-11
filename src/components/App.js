import React, { Component } from 'react';
import AddCard from '../containers/AddCard';
import BoardContainer from '../containers/BoardContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddCard />
        <BoardContainer />
      </div>
    );
  }
}

export default App;