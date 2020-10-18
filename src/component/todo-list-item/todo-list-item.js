import { Button, List } from 'antd';
import Text from 'antd/lib/typography/Text';
import React from 'react';
import styled from 'styled-components';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { DeleteOutlined } from '@ant-design/icons';

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
          onClick={onToggleDone}>
          {label}
        </CustomText>
        <ButtonWrapper>
        <Button
          type="primary"
          icon={<ExclamationCircleOutlined />}
          onClick={onToggleImportant}
        />
         <Button
          type="danger"
          icon={<DeleteOutlined />}
          onClick={onDeleted}
        />
        </ButtonWrapper>
      </Item>
    </List.Item>
  );
}

const CustomText = styled(Text)`
    font-size: 1.2rem;
    cursor: pointer;
`

const ButtonWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  width: 80px;
`

const Item = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export default TodoListItem;