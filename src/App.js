import React, { useState } from 'react';
import './App.css'

// Todo component, bring in 3 props using destructuring
function Todo({ todo, index, completeTodo }) {
  return (
    <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className='todo'>
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
      </div>
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
      <input type='text' className='input' value={value} onChange={e => setValue(e.target.value)} placeholder='Add todo...'/>
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
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  return (
    <div className='app'>
      <div className='todo-list'>
        {/* map through the state === for each to do,, do something*/}
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
};
export default App;