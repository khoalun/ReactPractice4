import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import './TodoItem.css';
class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      { title: 'Mua bim bim', isComplete: true },
      { title: 'Đi đá banh', isComplete: true },
      { title: 'Đi đổ xăng' }
    ];
  }

  onItemClicked() {

  }

  render() {
    if (todoItems.length) {

      return (
        <div className="App" >

          {this.todoItems.length && this.todoItems.map((item, index) =>
            < TodoItem
              key={index}
              item={item}
              onClick={this.onItemClicked} />
          )
          }
        </div>
      );
    } else {
      return (
        <div className="App" > Nothing here</div>
      );
    }
  }
}
export default App;