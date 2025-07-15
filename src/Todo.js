import React from 'react';

function TodoList({ todos }) {
  if (todos.length === 0) return <p>No tasks!</p>;

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

export default TodoList;
