import React, { useState } from 'react';
import './App.css'

// Todo component, bring in 3 props using destructuring
function Todo({ todo, index }) {
  return (
    <div className='todo'>
      {todo.text}
    </div>
  )
}

// Create function component that takes one prop addTodo
function TodoForm({addTodo}) {
  // use U state hooks 
  const [value, setValue] = useState('');
  
  // create submit 
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');

  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' className='input' value={value} onChange={e => setValue(e.target.value)} />
    </form>
  )
};

function App() {
  // 1st param is value of the state, 2nd is the method to update the state
  const [todos, setTodos] = useState([
    {
      // this initial data is an array of a todo object
      text: 'Learn about React',
      isCompleted: false
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false
    },
    {
      text: 'Build really cool todo app',
      isCompleted: false
    }
  ])


  return (
    <div className='app'>
      <div className='todo-list'>
        {/* map through the state === for each to do,, do something*/}
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  )
};
export default App;