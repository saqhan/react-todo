import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

<<<<<<< HEAD
const TodoList = ({ todos, onDeleted, 
                    onToggleDone, 
                    onToggleImportant }) => {
=======
const TodoList = ({ todos, onDeleted,
                  onToggleImportant, onToggleDone }) => {
>>>>>>> 119a2a6be223c2ee26206e405f7cb97c7ea9f654

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem 
          {...itemProps } 
          onDeleted={ () => onDeleted(id)}
<<<<<<< HEAD
          onToggleImportant={() => onToggleImportant (id) }
          onToggleDone={() => onToggleDone (id) }
=======
          onToggleDone={ () => onToggleDone (id)}
          onToggleImportant={() => onToggleImportant (id)}   
>>>>>>> 119a2a6be223c2ee26206e405f7cb97c7ea9f654
        />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;