import { List } from 'antd';
import Text from 'antd/lib/typography/Text';
import React from 'react';
import styled from 'styled-components';


const TodoListItem = ({ label, important }) => {
  return (
    <List.Item>
      <Item>
        <CustomText strong={important}>{label}</CustomText>
        <ButtonWrapper>
          <button>Edit</button>
          <button>Delete</button>
        </ButtonWrapper>
      </Item>
    </List.Item>
  );
}

const CustomText = styled(Text)`
    font-size: 1.2rem;
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