import React from 'react';
import { Button, Dropdown, Menu, Radio } from 'antd';
import styled from 'styled-components';
import { FilterOutlined } from '@ant-design/icons';
import { render } from '@testing-library/react';
import Text from 'antd/lib/typography/Text';



const TodoStatusFilter = ({ onToggleFilter }) => {

  const buttons = [
    { label: 'Active' },
    { label: 'All' },
    { label: 'Done' }
  ].map(({ label }) => <Menu.Item
    value={label}
    key={label}
    onClick={() => onToggleFilter(label)} >{label}</Menu.Item>)


  const menu = (
    <Menu>
      {buttons}
    </Menu>
  );

  return(
      <Dropdown overlay={menu}>
        <Button size='large' icon={<FilterOutlined/> }/>
      </Dropdown>
  );
}

export default TodoStatusFilter;