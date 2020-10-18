import { List } from 'antd';
import Text from 'antd/lib/typography/Text';
import React, { useState } from 'react';
import styled from 'styled-components';


const TodoListItem = ({ 
  label, 
  onDeleted,
  onToggleImportant,
  onToggleDone,
  done,
  important,
}) => {

  return (
    <List.Item>
      <Item>
        <CustomText
          delete={done}
          strong={important}
          mark={important}
          onClick={onToggleDone}
        >
          {label}
        </CustomText>
        <ButtonWrapper>
          <CustomButton onClick={onToggleImportant}>Hey!</CustomButton>
          <CustomButton onClick={onDeleted}>Delete</CustomButton>
        </ButtonWrapper>
      </Item>
    </List.Item>
  );
}

const CustomButton = styled.div`
  display: flex;
  align-items: center;
  background-color: #FFF;
  padding: 4px 8px;
  border: 1px solid #D9D9D9;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.0015);
  border-radius: 2px;
  color: #595959;
  font-size: 16px;
  cursor: pointer;
`

const CustomText = styled(Text)`
    font-size: 1.2rem;
    cursor: pointer;
`

const ButtonWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  width: 120px;
`

const Item = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export default TodoListItem;