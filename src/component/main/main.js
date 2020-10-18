import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { todosAPI } from '../../service/api-service';


import AddItemForm from '../add-item-form';
import Header from '../header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list'
import TodoStatusFilter from '../todo-status-filter';

const Main = () => {

  useEffect(() => {
    todosAPI.getTodos()
      .then(res => setTodos(res))
  }, [])

  const [todoData, setTodos] = useState([])
  const [term, setTerm] = useState('')
  const [filter, setfilter] = useState('done')
  const doneCount = todoData.filter((el) => el.done).length
  const todoCount = todoData.length - doneCount

  const searchItem = (items, term) => {
    if (term.length === 0) {
      return items
    }
    return items.filter((item) => {
      return item.label.indexOf(term) > -1
    })
  }

  const filterItems = (items, filter) => {
    switch (filter) {
      case 'done': items.filter(e => e.done)
      case 'active': items.filter(e => !e.done)
      default: 
      return items
    }
  }

  const visibleItems = filterItems(searchItem(todoData, term), filter)

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const addTodo = (label) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        important: false,
        done: false,
        label,
      }
    ])
  }

  const toggleProperty = (propName, id) => {
    setTodos((prev) => {
      const idx = prev.findIndex(el => el.id === id)
      const updatedItem = { ...prev[idx], [propName]: !prev[idx][propName] && true }
      const newArray = [
        ...prev.slice(0, idx),
        updatedItem,
        ...prev.slice(idx + 1)
      ]
      return newArray
    }
    )
  }

  const setImportant = (id) => {
    toggleProperty('important', id)
  }
  const setDone = (id) => {
    toggleProperty('done', id)
  }

  const onSearch = (element) => {
    setTerm(element.target.value)
  }




  return (
    <Layout>
      <Header
        todoCount={todoCount}
        doneCount={doneCount} />
      <Row justify='center' gutter={[0, 10]}>
        <Col span={5}>
          <SearchPanel onSearch={onSearch} value={term}/>
        </Col>
        <Col span={1} />
        <Col span={4}>
          <TodoStatusFilter />
        </Col>
      </Row>
      <Row justify='center'>
        <Col span={10}>
          <TodoList
            todos={visibleItems}
            onDeleted={deleteTodo}
            onToggleDone={setDone}
            onToggleImportant={setImportant} />
        </Col>
      </Row>
      <Row justify='center'>
        <Col span={10}>
          <AddItemForm onAdded={addTodo} />
        </Col>
      </Row>
    </Layout>
  );
}

const Layout = styled.div`
  max-width: 1200px;
  margin: 20px auto;
`

export default Main;