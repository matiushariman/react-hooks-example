import React, { useState } from 'react';

export function ToDo() {
  const [todos, addTodo] = useState(['learning React Hooks']);
  const [newTodo, writeNewTodo] = useState('');

  return (
    <div>
      <p>Thing(s) to do today</p>
      <ul>
        {todos.map((todo, i) => (
          <li key={`${todo}-${i}`}>{todo}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTodo}
        onChange={e => writeNewTodo(e.target.value)}
      />
      <button
        disabled={newTodo === ''}
        onClick={() => addTodo([...todos, newTodo])}
      >
        Add
      </button>
    </div>
  );
}

export default ToDo;
