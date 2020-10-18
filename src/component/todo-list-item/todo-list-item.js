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
        <TextWrapper>
          <CustomText
            delete={done}
            strong={important}
            mark={important}
            onClick={onToggleDone}>
            {label}
          </CustomText>
        </TextWrapper>
        <ButtonWrapper>
          <CustomButton
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

const TextWrapper = styled.div`
  word-wrap: break-word;
  width: 250px;
`

const CustomButton = styled(Button)`
  margin-right: 10px;
`

const CustomText = styled(Text)`
  font-size: 1.2rem;
  cursor: pointer;

  @media (max-width: 992px) {
    font-size: 1rem;
  }
`

const ButtonWrapper = styled.span`
  width: 80px;
`

const Item = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export default TodoListItem;