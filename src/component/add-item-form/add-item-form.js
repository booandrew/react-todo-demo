import { Input, Button, Row } from 'antd';
import Form from 'antd/lib/form/Form';
import React, { useState } from 'react';
import styled from 'styled-components';

const AddItemForm = ({ onAdded }) => {

  const [label, setLabel] = useState('')

  const onLabelChange = (e) => {
    setLabel(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault(e)
    onAdded(label)
    setLabel('')
  }


  return (
    <CustomForm onSubmit={onSubmit}>
        <InputWrapper>
          <Input placeholder="type new task" onChange={onLabelChange} value={label} />
        </InputWrapper>
        <Button
          type="primary"
          onClick={onSubmit}>
          Add Task
      </Button>
    </CustomForm>
  );
}

const InputWrapper = styled.div`
  flex: .97;
`

const CustomForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`

export default AddItemForm;