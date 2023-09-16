import React, { useState } from 'react';
import './App.css';

const TodoItem = props => {
  return <li>{props.description}</li>;
};

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      description: 'Climb Mt. Everest',
      isComplete: false
    },
    {
      id: 2,
      description: 'Dive the Great Barrier Reef',
      isComplete: true
    }
  ]);

  const [newTodo, setNewTodo] = useState('');

  const handleChange = event => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    setTodos([
      ...todos,
      {
        id: Date.now(),
        description: newTodo,
        isComplete: false
      }
    ]);

    setNewTodo('');
  };

  const todoItems = todos.map(t => (
    <TodoItem key={t.id} description={t.description} />
  ));

  return (
    <div className="App">
      <h2>Simple Todo with React State</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="newTodo"
          placeholder="What would you like to do?"
          onChange={handleChange}
          value={newTodo}
        />
      </form>

      <ol>{todoItems}</ol>
    </div>
  );
}

export default App;