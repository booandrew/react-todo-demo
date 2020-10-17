import React from 'react';
import { PageHeader } from 'antd';
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderWrapper>
      <Navbar>
        <PageHeader
          ghost={false}
          title="TodoApp"
          subTitle='1 more 3 done'
        >
        </PageHeader>
      </Navbar>
    </HeaderWrapper>

  );
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Navbar = styled.div`
  max-width: 700px;
`

export default Header;