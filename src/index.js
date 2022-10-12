import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';
import reportWebVitals from './reportWebVitals';

const todoList = [
  "walk the plank",
  "streak through the quad",
  "keg stand with Blue",
  "your my boy Blue"
]

ReactDOM.render(
  <React.StrictMode>
    <MyList theList={todoList} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your MyList, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
