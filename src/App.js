import React, { Component } from 'react';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';

class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        description: 'Task 1 !',
        done: false,
      },
      {
        id: 2,
        description: 'Task 2 !',
        done: false,
      },
      {
        id: 3,
        description: 'task 3 !',
        done: false,
      },
    ],
  };
  addTask = (task) => this.setState({ tasks: [...this.state.tasks, task] });
  doneTask = (id) =>
    this.setState({
      tasks: this.state.tasks.map((el) =>
        el.id === id ? { ...el, done: !el.done } : el
      ),
    });
  deleteTask = (id) =>
    this.setState({
      tasks: this.state.tasks.filter((el) => el.id !== id),
    });
  render() {
    return (
      <div>
     
          <h1>Here is a list of what you should do</h1>
     
        <TodoList
          todos={this.state.tasks}
          handleDelete={this.deleteTask}
          handleDone={this.doneTask}
        />
        <AddTask handleAdd={this.addTask} />
      </div>
    );
  }
}
export default App;