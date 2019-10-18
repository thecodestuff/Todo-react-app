import React, {Component} from 'react';
import TodoApp from './TodoApp.js'
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="container">
        <h1>Todo App</h1>
        <TodoApp />
      </div>
    );
  }
}
export default App;
