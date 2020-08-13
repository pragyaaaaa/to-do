import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import './App.css';
import Todo from './Todo';

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
    setInput('')/*clearing the input field after adding to list*/
  }
  return (
    <div className="App">
      <form>
        {/* Associating state 'input' variable to JSX */}
        <FormControl>
          <InputLabel>What do you want to do? </InputLabel>
          <Input value={input} /* variable and changing variable using 'setInput' */
            onChange={event => setInput(event.target.value)}>
          </Input>
        </FormControl>
        <Button
          disabled={!input} /* keep button disabled till something is written in input field. */
          variant="contained"
          color="primary"
          type="submit"
          onClick={addTodo}>Add</Button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo text={todo}></Todo>
        ))}
      </ul>
    </div>
  );
}

export default App;
