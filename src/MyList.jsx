import React, { Component } from 'react';
import ListItem from './ListItem';


export default class MyList extends Component {
  state = {
    taskArray: this.props.theList,
    newItem: ''
  };

  handleChange = e => {
    this.setState({
      newItem: e.target.value
    })
  };

  addItem = e => {
    e.preventDefault()
    this.setState(prevState => {
      return {
        taskArray: [...prevState.taskArray, prevState.newItem],
        newItem: ''
      }
    })
    console.log(this.state)
  };

  clearList = () => {
    console.log("Cleared list!")

    this.setState({
      taskArray: []
    })
  };

  render() {
    const toDoItems = this.state.taskArray.map((item, i) => {
      return <ListItem task={item} key={i} />
    })

    return (
      <div>
        <>
          <h1>Things I should work on:</h1>
          <form onSubmit={this.addItem}>
            <label htmlFor='newItem' >New To Do:</label>
            <input type='text'
              placeholder='Type an item here'
              onChange={this.handleChange}
              value={this.state.newItem}
            />
            <button type='submit'>Add to ToDoList!</button>
          </form>
          <ul>
            {toDoItems}
          </ul>
          <div>
            <button onClick={this.clearList}>Finished ToDoList!</button>
          </div>
        </>
      </div>
    )
  };
};

