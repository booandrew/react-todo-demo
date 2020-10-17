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

  const [todoData, setTodos] = useState([])

  useEffect(() => {
    todosAPI.getTodos()
    .then(res => setTodos(res))
  }, [])

  return (
    <Layout>
      <Header />
      <Row
        justify='center'
        gutter={[0, 10]}>
        <Col span={5}>
          <SearchPanel />
        </Col>
        <Col span={1} />
        <Col span={4}>
          <TodoStatusFilter />
        </Col>
      </Row>
      <Row justify='center'>
        <Col span={10}>
          <TodoList todos={todoData}/>
        </Col>
      </Row>
      <Row justify='center'>
        <Col span={10}>
        <AddItemForm />
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