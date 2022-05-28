import React from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {

  let student: string = 'Jonny';
  let age: number = 7;
  let isSmart: boolean = true;

  interface Person {
    name: string,
    job?: string,
    age: number
  }

  const person: Person = {
    name: 'Joa',

    age: 25
  }

  return (
    <div className="App">
      <Counter></Counter>

    </div>
  );
}

export default App;
