import { List } from 'antd';

import React from 'react';
import TodoListItem from '../todo-list-item';


const TodoList = ({ todos }) => {

  const elements = todos.map(item => <TodoListItem {...item} key={item.id}/>)

  return (
      <List size="small" bordered>
        {elements}
      </List>
  );
}

export default TodoList;