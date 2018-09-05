import React, { Component } from 'react';
import './App.css';

import Filter from './containers/FilterContainer'
import TodoList from './containers/TodoListContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo List</h1>
        </header>
        <TodoList />
       <Filter />
      </div>
    );
  }
}

export default App;
