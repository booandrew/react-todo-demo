import { Input, Button, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';

const AddItemForm = () => {
  return (
    <Wrapper>
      <InputWrapper>
          <Input placeholder="type new task" />
      </InputWrapper>
          <Button type="primary">Add Task</Button>
    </Wrapper>
  );
}

const InputWrapper = styled.div`
  flex: 0.9;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`

export default AddItemForm;