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
  const [filter, setfilter] = useState('')
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
      case 'Done':
        return items.filter(e => e.done)
      case 'Active':
        return items.filter(e => !e.done)
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

  const onToggleFilter = (filter) => {
    setfilter(filter)
  }




  return (
    <Layout>
      <Header
        todoCount={todoCount}
        doneCount={doneCount} />

          <FilterWrapper justify='center' gutter={[2, 10]}>
            <InputWrapper>
              <SearchPanel onSearch={onSearch} value={term} />
            </InputWrapper>
            <TodoStatusFilter onToggleFilter={onToggleFilter} />
          </FilterWrapper>

          <TodoList
            todos={visibleItems}
            onDeleted={deleteTodo}
            onToggleDone={setDone}
            onToggleImportant={setImportant} />
          <AddItemForm onAdded={addTodo} />
    </Layout>
  );
}

const InputWrapper = styled.div`
  flex: .97;
  @media (max-width: 420px) {
    width: 100%;
    flex: 1;
    margin-bottom: 10px;
  }
`

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  @media (max-width: 420px) {
    flex-direction: column;
  }
`

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 590px;
  margin: 20px auto;
  @media (max-width: 620px) {
    margin: 0px 20px;
  }
`

export default Main;