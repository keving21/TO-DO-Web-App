import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    //do something on load
    console.log("I've loaded up")

    fetch('http://localhost:8080/api/todoItems').then((response) => 
    response.json().then(todoItems => {
      console.log(todoItems);
    })
    );
  });
  return <div>Hi there</div>
}

export default App;
