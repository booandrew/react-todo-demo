import { List } from 'antd';

import React from 'react';
import TodoListItem from '../todo-list-item';


const TodoList = ({
  todos,
  onDeleted,
  onToggleImportant,
  onToggleDone, }) => {

  const elements = todos.map((item) => {
     return (<TodoListItem  {...item}
      key={item.id}
      onDeleted={() => onDeleted(item.id)}
      onToggleImportant={() => onToggleImportant(item.id)}
      onToggleDone={() => onToggleDone(item.id)}
    />)
  })

  return (
    <List size="small" bordered>
      {elements}
    </List>
  );
}

export default TodoList;