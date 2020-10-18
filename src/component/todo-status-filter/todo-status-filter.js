import React from 'react';
import { Radio } from 'antd';
import styled from 'styled-components';


const TodoStatusFilter = ({ onToggleFilter }) => {

  const buttons = [
    { label: 'Active' },
    { label: 'All' },
    { label: 'Done' }
  ].map(({ label }) => <Radio.Button
    value={label}
    key={label}
    onClick={() => onToggleFilter(label)} >{label}</Radio.Button>)


  return (
    <ButtonsWrapper>
      <Radio.Group>
        {buttons}
      </Radio.Group>
    </ButtonsWrapper>
  );
}

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end
`

export default TodoStatusFilter;