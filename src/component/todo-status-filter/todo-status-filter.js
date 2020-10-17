import React from 'react';
import { Button, Radio } from 'antd';
import styled from 'styled-components';


const TodoStatusFilter = () => {
  return (
    <ButtonsWrapper>
      <Radio.Group>
        <Radio.Button value="large">Active</Radio.Button>
        <Radio.Button value="default">All</Radio.Button>
        <Radio.Button value="small">Done</Radio.Button>
      </Radio.Group>
    </ButtonsWrapper>
  );
}

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end
`

export default TodoStatusFilter;