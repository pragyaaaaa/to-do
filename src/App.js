import React, { useState } from 'react';

import './App.css';

function App() {
  /* in a state variable, 'todos' refer to the array elemets and 'setTodos' is used to append
  to 'todos'. Here we start with an empty list and then 'todos' will be an empty array and 
  'setTodos' will append to it. Also, it's a temporary memory, state will be cleared everytime
  we hit refresh. */
  const [todos, setTodos] = useState(['Start reading clean code.']);
  const [input, setInput] = useState('');
  const addTodo = (event) => {
    event.preventDefault();/* to stop page from refreshing everytime we click submit button */
    setTodos([...todos, input])/* spread in JS says, append input to todos, not replace */
    setInput('')
  }
  return (
    <div className="App">
      <form>
      {/* Associating state 'input' variable to JSX */}
      <input
        value={input} /* variable and changing variable using 'setInput' */
        onChange={event => setInput(event.target.value)}>
      </input>
      <button type="submit" onClick={addTodo}>Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
